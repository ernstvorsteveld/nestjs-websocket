import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io-client';
import { User } from '../../../domain/model/socket-module.user';
import { SocketService } from './socket-module.socket-service';

@WebSocketGateway()
export class SocketModuleGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly socketService: SocketService) {}

  afterInit() {
    this.socketService.afterInit();
  }

  handleConnection(socket: Socket): void {
    this.socketService.handleConnection(socket);
  }

  handleDisconnect(client: any): void {
    this.socketService.handleDisconnect(client);
  }

  emitUserCreated(user: User): Promise<void> {
    this.socketService.emitEvent('user.created', user);
    return Promise.resolve();
  }
}
