import { IsNotEmpty } from 'class-validator';
import { Chatroom } from 'src/schema/chatroom.schema';
import { User } from 'src/schema/user.schema';

export class CreateMessageDto {
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  sender: User;
  chatroomId: Chatroom;
}
