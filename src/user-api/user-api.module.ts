import { Module } from '@nestjs/common';
import {
  UserApiController,
  UserConverter,
  UserConverterImpl,
} from './adapter/in/http/user-api.controller';
import { LocalEventPublisher } from './adapter/out/local-event/user-api.local-event.publisher';
import { UserServiceImpl } from './domain/service/user-api.service';
import { UserApiUseCases } from './port/in/user-api.usecases';
import { MessagePublisher } from './port/out/message-api.publisher';

@Module({
  imports: [],
  controllers: [UserApiController],
  providers: [
    {
      provide: UserApiUseCases,
      useClass: UserServiceImpl,
    },
    {
      provide: UserConverter,
      useClass: UserConverterImpl,
    },
    {
      provide: MessagePublisher,
      useClass: LocalEventPublisher,
    },
  ],
})
export class UserApiModule {}
