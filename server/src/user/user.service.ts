import * as bcrypt from 'bcrypt';
import {
  NotFoundException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import config from 'src/common/configs/config';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  public async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email: email.toString() });
    if (!user) throw new NotFoundException('User not found');

    return {
      status: 201,
      success: true,
      data: user,
    };
  }

  public async findAll() {
    const users = await this.userModel.find({});
    return {
      status: 201,
      success: true,
      data: users,
    };
  }

  public async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.findOne({ email: createUserDto.email });

    if (user) throw new BadRequestException('User is exist');

    const saltOrRounds = config().security.bcryptSaltOrRound;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    createUserDto.password = hash;

    const createdUser = await new this.userModel(createUserDto);
    await createdUser.save();

    return {
      status: 201,
      success: true,
      data: createdUser,
    };
  }

  public async update(email: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findOne({ email });

    if (!user) throw new NotFoundException('User not found');

    const updatedUser = await this.userModel.updateOne(
      { email: user.email },
      updateUserDto,
    );

    return {
      status: 201,
      success: true,
      data: updatedUser,
    };
  }

  public async remove(email: string) {
    const deletedUser = await this.userModel.findOneAndDelete({ email });

    if (!deletedUser) throw new NotFoundException('User not found');

    return {
      status: 201,
      success: true,
      data: deletedUser,
    };
  }
}
