import { Injectable, Logger } from '@nestjs/common';
import { Socket } from 'socket.io-client';
import { Server } from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';

export abstract class SocketService {
  abstract handleDisconnect(client: any): void;
  abstract afterInit(): void;
  abstract handleConnection(socket: Socket): void;
  abstract emitEvent(event: string, data: any): void;
}

@Injectable()
export class SocketServiceImpl implements SocketService {
  private readonly connectedClients: Map<string, Socket> = new Map();
  logger = new Logger(SocketServiceImpl.name);

  @WebSocketServer()
  private readonly server: Server;

  afterInit(): void {
    this.logger.log('Initialized');
  }

  handleDisconnect(client: any): void {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  handleConnection(socket: Socket): void {
    this.logger.debug(`Client id:${socket.id} connected`);
    const clientId = socket.id;
    this.connectedClients.set(clientId, socket);

    socket.on('disconnect', () => {
      this.connectedClients.delete(clientId);
    });
  }

  emitEvent(event: string, data: any): void {
    this.logger.debug(`Emitting event ${event} with data ${data}`);
    this.server.emit(event, data);
  }
}
