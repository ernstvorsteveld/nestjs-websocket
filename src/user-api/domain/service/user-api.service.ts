import { Injectable, Logger } from '@nestjs/common';
import { UserApiUseCases } from '../../port/in/user-api.usecases';
import { MessagePublisher } from '../../port/out/message-api.publisher';
import { User } from '../model/user';

@Injectable()
export class UserServiceImpl implements UserApiUseCases {
  logger = new Logger(UserServiceImpl.name);

  constructor(private readonly messagePublihser: MessagePublisher) {}

  create(user: User): Promise<void> {
    this.logger.debug(user);
    this.messagePublihser.userCreated(user);
    return Promise.resolve();
  }
}
