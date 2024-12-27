import { Module } from '@nestjs/common';
import {
  UserConverter,
  UserCreatedListener,
} from './adapter/in/local-event/socket-module.events';
import { SocketModuleGateway } from './adapter/out/socket/socket-module.gateway';
import {
  SocketService,
  SocketServiceImpl,
} from './adapter/out/socket/socket-module.socket-service';
import { SocketModuleService } from './domain/service/socket-module.service';
import { EventUseCases } from './port/in/socket-module.usecases';

@Module({
  providers: [
    SocketModuleGateway,
    UserCreatedListener,
    UserConverter,
    {
      provide: SocketService,
      useClass: SocketServiceImpl,
    },
    {
      provide: EventUseCases,
      useClass: SocketModuleService,
    },
  ],
})
export class SocketModule {}
