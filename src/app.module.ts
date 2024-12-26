import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserApiModule } from './user-api/user-api.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SocketModule } from './socket-module/socket-module.module';
import { SocketModuleGateway } from './socket-module/adapter/out/socket/socket-module.gateway';

@Module({
  imports: [UserApiModule, EventEmitterModule.forRoot(), SocketModule],
  controllers: [AppController],
  providers: [AppService, SocketModuleGateway],
})
export class AppModule {}
