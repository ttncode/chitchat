import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from 'src/schema/message.schema';
import { ChatroomModule } from 'src/chatroom/chatroom.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    ChatroomModule,
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
