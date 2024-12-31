import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io-client';
import { User } from '../../../domain/model/socket-module.user';
import { Server } from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway(3011, { cors: { origin: '*' } })
export class SocketModuleGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  logger = new Logger(SocketModuleGateway.name);
  private readonly connectedClients: Map<string, Socket> = new Map();

  @WebSocketServer()
  private readonly server: Server;

  constructor() {}

  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(socket: Socket): void {
    this.logger.debug(`Client id:${socket.id} connected`);
    const clientId = socket.id;
    this.connectedClients.set(clientId, socket);

    socket.on('disconnect', () => {
      this.connectedClients.delete(clientId);
    });
  }

  handleDisconnect(client: any): void {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  emitUserCreated(user: User): Promise<void> {
    this.logger.debug(`About to emit: ${JSON.stringify(user)}`);
    this.connectedClients.forEach((c) => {
      c.emit('user.created', user);
    });
    return Promise.resolve();
  }
}
