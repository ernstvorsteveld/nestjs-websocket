import { Module } from '@nestjs/common';
import {
  UserConverter,
  UserCreatedListener,
} from './adapter/in/local-event/socket-module.events';
import { SocketModuleGateway } from './adapter/out/socket/socket-module.gateway';
import { SocketModuleService } from './domain/service/socket-module.service';
import { EventUseCases } from './port/in/socket-module.usecases';

@Module({
  providers: [
    SocketModuleGateway,
    SocketModuleService,
    UserCreatedListener,
    UserConverter,
    {
      provide: EventUseCases,
      useValue: SocketModuleService,
    },
  ],
})
export class SocketModule {}
