import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from 'src/common/configs/config';
import { WebsocketModule } from 'src/websocket/websocket.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { ChatroomModule } from './chatroom/chatroom.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    WebsocketModule,
    AuthModule,
    UserModule,
    MessageModule,
    ChatroomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
