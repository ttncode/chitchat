import { PartialType } from '@nestjs/swagger';
import { CreateChatroomDto } from './create-chatroom.dto';

export class UpdateChatroomDto extends PartialType(CreateChatroomDto) {}
