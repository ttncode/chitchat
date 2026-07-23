import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { UpdateChatroomDto } from './dto/update-chatroom.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Chatroom } from 'src/schema/chatroom.schema';
import { Model } from 'mongoose';

@Injectable()
export class ChatroomService {
  constructor(
    @InjectModel(Chatroom.name) private chatroomModel: Model<Chatroom>,
  ) {}

  public async findOneById(id: string) {
    const chatroom = await this.chatroomModel.findOne({ _id: id });
    console.log(chatroom);

    if (!chatroom) throw new NotFoundException('Chat room not found');

    return {
      status: 201,
      success: true,
      data: chatroom,
    };
  }

  public async findAll() {
    const chatroomList = await this.chatroomModel.find({});

    if (!chatroomList)
      throw new BadRequestException('Get chatroom list failure');

    return {
      status: 201,
      success: true,
      data: chatroomList,
    };
  }

  public async create(createChatroomDto: CreateChatroomDto) {
    console.log(createChatroomDto);

    const createdChatroom = new this.chatroomModel(createChatroomDto);
    await createdChatroom.save();

    if (!createdChatroom)
      throw new BadRequestException('Create chatroom failure');

    return {
      status: 201,
      success: true,
      data: createdChatroom,
    };
  }

  public async update(id: string, updateChatroomDto: UpdateChatroomDto) {
    const chatroom = await this.chatroomModel.findOne({ _id: id });

    if (!chatroom) throw new NotFoundException('Chat room not found');

    const updatedChatroom = await this.chatroomModel.findByIdAndUpdate(
      chatroom._id,
      {
        ...updateChatroomDto,
        members: { ...chatroom.members, ...updateChatroomDto.members },
      },
    );

    return {
      status: 201,
      success: true,
      data: updatedChatroom,
    };
  }

  public async remove(id: string) {
    const deletedChatroom = await this.chatroomModel.findOneAndDelete({
      _id: id,
    });

    if (!deletedChatroom) throw new NotFoundException('Chat room not found');

    return {
      status: 201,
      success: true,
      data: deletedChatroom,
    };
  }
}
