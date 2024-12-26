import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { User } from '../../../domain/model/user';
import { UserCreatedEvent } from '../../../port/out/message-api.events';
import { MessagePublisher } from '../../../port/out/message-api.publisher';

@Injectable()
export class LocalEventPublisher implements MessagePublisher {
  logger = new Logger(LocalEventPublisher.name);

  constructor(private eventEmitter: EventEmitter2) {}

  public userCreated(user: User): void {
    this.logger.debug(
      `user created event for user ${user.userId} and name ${user.username}`,
    );
    const event = new UserCreatedEvent(user.userId, user.username);
    this.eventEmitter.emit('user.created', event);
  }
}
