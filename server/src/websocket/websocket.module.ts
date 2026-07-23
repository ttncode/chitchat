import { Global, Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';

@Global()
@Module({
  providers: [WebsocketGateway],
  exports: [WebsocketGateway],
})
export class WebsocketModule {}
