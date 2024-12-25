import { Module } from '@nestjs/common';
import { SocketModuleGateway } from './adapter/out/socket/socket-module.gateway';
import { SocketModuleService } from './domain/service/socket-module.service';

@Module({
  providers: [SocketModuleGateway, SocketModuleService],
})
export class SocketModule {}
