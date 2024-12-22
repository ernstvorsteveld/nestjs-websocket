import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { UserApiUseCases } from '../../port/in/user-api.usecases';
import { MessagePublisher } from '../../port/out/message-api.publisher';
import { User } from '../model/user';

@Injectable()
export class UserServiceImpl implements UserApiUseCases {
  constructor(private readonly messagePublihser: MessagePublisher) {}

  create(user: User): Promise<void> {
    log(user);
    return Promise.resolve();
  }
}
