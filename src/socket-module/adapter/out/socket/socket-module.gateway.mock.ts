import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { User } from '../../../domain/model/socket-module.user';

@WebSocketGateway()
export class SocketModuleGatewayMock
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(SocketModuleGatewayMock.name);
  @WebSocketServer() io: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.io.sockets;

    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
    this.logger.debug(`args: ${args}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  emitUserCreated(user: User): Promise<void> {
    this.emit('user.created', user);
    return Promise.resolve();
  }

  emit(event: string, data: any) {
    this.logger.debug(`Emitting event: ${event} with data: ${data}`);
  }
}
