import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SocketModule } from './socket-module/socket-module.module';
import { UserApiModule } from './user-api/user-api.module';
import config from './config/configuration';

@Module({
  imports: [
    UserApiModule,
    SocketModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      load: [config],
    }),
  ],
  providers: [],
})
export class AppModule {}
