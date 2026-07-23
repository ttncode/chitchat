import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'events' })
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  public async handleConnection(client: Socket) {
    // Handle new WebSocket connections
    console.log(`Client connected: ${client.id}`);
  }

  public async handleDisconnect(client: Socket) {
    // Handle WebSocket disconnections
    client.disconnect();
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('offer')
  public async handleOffer(@MessageBody() data: any) {
    // Handle offer from client
    // Broadcast offer to other clients or handle accordingly for WebRTC signaling
    this.server.emit('offer', data);
  }

  @SubscribeMessage('answer')
  public async handleAnswer(@MessageBody() data: any) {
    // Handle answer from client
    // Broadcast answer to other clients or handle accordingly for WebRTC signaling
    this.server.emit('answer', data);
  }

  @SubscribeMessage('iceCandidate')
  public async handleIceCandidate(client: Socket, @MessageBody() data: any) {
    // Handle ICE candidate from client
    // Broadcast ICE candidate to other clients or handle accordingly for WebRTC signaling
    this.server.emit('iceCandidate', data);
  }
}
