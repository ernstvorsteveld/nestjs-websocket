import { Module } from '@nestjs/common';
import { SocketModuleService } from './socket-module.service';
import { SocketModuleGateway } from './socket-module.gateway';

@Module({
  providers: [SocketModuleGateway, SocketModuleService],
})
export class SocketModule {}
