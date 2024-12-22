import { WebSocketGateway } from '@nestjs/websockets';
import { SocketModuleService } from '../../../domain/service/socket-module.service';

@WebSocketGateway()
export class SocketModuleGateway {
  constructor(private readonly socketModuleService: SocketModuleService) {}
}
