import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatroomDocument = HydratedDocument<Chatroom>;

@Schema({ timestamps: true })
export class Chatroom {
  @Prop({ required: true })
  name: string;

  @Prop({ type: String, ref: 'User', required: true })
  roomMaster: string;

  @Prop({ type: [String], ref: 'User', required: true })
  members: string[];

  @Prop({ default: false, select: false })
  isDelete: boolean;
}

export const ChatroomSchema = SchemaFactory.createForClass(Chatroom);
