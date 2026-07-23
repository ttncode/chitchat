import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from 'src/schema/message.schema';
import { Model } from 'mongoose';
import { WebsocketGateway } from 'src/websocket/websocket.gateway';
import { ChatroomService } from 'src/chatroom/chatroom.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
    private readonly websocketGateway: WebsocketGateway,
    private readonly chatroomService: ChatroomService,
  ) {}

  public async findAllByChatroomId(chatroomId: string) {
    const chatroom = await this.chatroomService.findOneById(chatroomId);

    const messageList = await this.messageModel.find({
      chatroomId: chatroom.data._id,
    });

    return {
      status: 201,
      success: true,
      data: messageList,
    };
  }

  public async create(createMessageDto: CreateMessageDto) {
    const createdMessage = new this.messageModel(createMessageDto);
    await createdMessage.save();

    if (!createdMessage)
      throw new BadRequestException('Create message failure');

    await this.websocketGateway.handleOffer(createdMessage);

    return {
      status: 201,
      success: true,
      data: createdMessage,
    };
  }

  public async remove(id: string) {
    return `This action removes a #${id} message`;
  }

  public async recall(id: string) {
    return `This action recall a #${id} message`;
  }
}
