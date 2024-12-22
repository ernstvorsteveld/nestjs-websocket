import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { User } from '../../../domain/model/user';
import { UserCreatedEvent } from '../../../port/out/message-api.events';
import { MessagePublisher } from '../../../port/out/message-api.publisher';

@Injectable()
export class LocalEventPublisher implements MessagePublisher {
  constructor(private eventEmitter: EventEmitter2) {}

  userCreated(user: User): void {
    const event = new UserCreatedEvent(user.userId, user.username);
    this.eventEmitter.emit('user.created', event);
  }
}
