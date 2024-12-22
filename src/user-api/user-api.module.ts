import { Module } from '@nestjs/common';
import { UserApiController } from './adapter/in/http/user-api.controller';
import { UserServiceImpl } from './domain/service/user-api.service';

@Module({
  controllers: [UserApiController],
  providers: [
    {
      provide: 'UserApiUseCases',
      useClass: UserServiceImpl,
    },
  ],
})
export class UserApiModule {}
