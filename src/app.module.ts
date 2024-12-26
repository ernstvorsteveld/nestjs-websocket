import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SocketModule } from './socket-module/socket-module.module';
import { UserApiModule } from './user-api/user-api.module';
import config from './config/configuration';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      load: [config],
    }),
    EventEmitterModule.forRoot(),
    UserApiModule,
    SocketModule,
  ],
  providers: [],
})
export class AppModule {}
