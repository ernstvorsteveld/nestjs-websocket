import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { UserApiUseCases } from 'src/user-api/port/in/user-api.usecases';
import { User } from '../model/user';

@Injectable()
export class UserServiceImpl implements UserApiUseCases {
  create(user: User): Promise<void> {
    log(user);
    return Promise.resolve();
  }
}
