import * as bcrypt from 'bcrypt';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import config from 'src/common/configs/config';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  public async register(registerAuthDto: RegisterAuthDto) {
    const user = await this.userModel.findOne({ email: registerAuthDto.email });

    if (user) throw new BadRequestException('User is exist');

    const saltOrRounds = config().security.bcryptSaltOrRound;
    const hash = await bcrypt.hash(registerAuthDto.password, saltOrRounds);

    registerAuthDto.password = hash;

    const registeredUser = new this.userModel(registerAuthDto);
    await registeredUser.save();

    const { password, ...result } = Object.assign(registeredUser);

    return {
      status: 201,
      success: true,
      data: result,
    };
  }

  public async login(loginAuthDto: LoginAuthDto) {
    const user = await this.userModel.findOne({ email: loginAuthDto.email });

    if (!user) throw new NotFoundException('User not found');

    const saltOrRounds = config().security.bcryptSaltOrRound;
    const hash = await bcrypt.hash(loginAuthDto.password, saltOrRounds);

    if (user.password !== hash)
      return {
        status: 401,
        success: false,
        message: 'Password is not match',
      };

    const { password, ...result } = Object.assign(user);

    return {
      status: 201,
      success: true,
      data: result,
    };
  }

  public async forgot(data: any): Promise<any> {}

  public async reset(data: any): Promise<any> {}
}
