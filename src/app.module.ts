import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherGateway } from './publisher/publisher.gateway';
import { UserApiModule } from './user-api/user-api.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SocketModule } from './socket-module/socket-module.module';

@Module({
  imports: [UserApiModule, EventEmitterModule.forRoot(), SocketModule],
  controllers: [AppController],
  providers: [AppService, PublisherGateway],
})
export class AppModule {}
