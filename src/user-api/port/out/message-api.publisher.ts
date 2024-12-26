import { Logger } from '@nestjs/common';
import { User } from '../../domain/model/user';

export abstract class MessagePublisher {
  abstract userCreated(user: User): void;
}

export class MessagePublisherMock implements MessagePublisher {
  logger = new Logger(MessagePublisherMock.name);

  userCreated(user: User): void {
    this.logger.debug('user created event for user: ', user);
  }
}
