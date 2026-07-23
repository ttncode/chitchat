import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Get(':chatroomId')
  findAllByChatroomId(@Param('chatroomId') chatroomId: string) {
    return this.messageService.findAllByChatroomId(chatroomId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(id);
  }

  @Delete('recall/:id')
  recall(@Param('id') id: string) {
    return this.messageService.recall(id);
  }
}
