import { Module } from '@nestjs/common';
import { SocketModuleService } from './domain/service/socket-module.service';
import { SocketModuleGateway } from './adapter/in/local-event/socket-module.gateway';

@Module({
  providers: [SocketModuleGateway, SocketModuleService],
})
export class SocketModule {}
