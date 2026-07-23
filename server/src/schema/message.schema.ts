import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
  @Prop({ required: true })
  content: string;

  @Prop({ type: String, ref: 'User', required: true })
  sender: string;

  @Prop({
    type: String,
    ref: 'Chatroom',
    required: true,
  })
  chatroomId: mongoose.Schema.Types.ObjectId;

  @Prop({ default: false, select: false })
  isDelete: boolean;

  @Prop({ default: false, select: false })
  isRecall: boolean;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
