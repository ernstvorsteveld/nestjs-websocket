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
import { EventUseCases } from '../../../port/in/socket-module.usecases';

@WebSocketGateway()
export class SocketModuleGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly useCases: EventUseCases) {}
  private readonly logger = new Logger(SocketModuleGateway.name);
  @WebSocketServer() io: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.io.sockets;

    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  emitUserCreated(user: User): Promise<void> {
    this.emit('user.created', user);
    return Promise.resolve();
  }

  emit(event: string, data: any) {
    this.io.emit(event, data);
  }
}
