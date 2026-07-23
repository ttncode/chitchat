import { BaseApi } from '@/api/base';

export class MessageAPI extends BaseApi {
  private prefix = '/message';

  sendMessage(message: any): Promise<any> {
    return this.post(this.prefix + '/', message);
  }

  getMessageInChatroom(chatroomId: string): Promise<any> {
    return this.get(this.prefix + '/' + chatroomId);
  }

  deleteMessage(messageId: string): Promise<any> {
    return this.delete(this.prefix + '/' + messageId);
  }

  recallMessage(messageId: string): Promise<any> {
    return this.post(this.prefix + '/recall/' + messageId);
  }
}
