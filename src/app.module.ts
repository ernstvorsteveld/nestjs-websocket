import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherGateway } from './publisher/publisher.gateway';
import { UserApiModule } from './user-api/user-api.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [UserApiModule, EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, PublisherGateway],
})
export class AppModule {}
