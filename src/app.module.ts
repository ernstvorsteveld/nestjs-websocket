import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherGateway } from './publisher/publisher.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PublisherGateway],
})
export class AppModule {}
