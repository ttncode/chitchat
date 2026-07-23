import { IsNotEmpty } from 'class-validator';

export class CreateChatroomDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  roomMaster: string;

  @IsNotEmpty()
  members: string[];
}
