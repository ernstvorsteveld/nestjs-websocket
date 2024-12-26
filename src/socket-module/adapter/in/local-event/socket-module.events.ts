import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { User } from '../../../domain/model/socket-module.user';
import { EventUseCases } from '../../../port/in/socket-module.usecases';

export class UserCreatedEvent {
  constructor(
    public readonly userId: string,
    public readonly username: string,
  ) {}
}

@Injectable()
export class UserConverter {
  logger = new Logger(UserConverter.name);

  toUser(event: UserCreatedEvent): User {
    this.logger.debug(
      `About to convert event to user: ${event.userId} (${event.username})`,
    );
    return new User(event.userId, event.username);
  }
}

@Injectable()
export class UserCreatedListener {
  logger = new Logger(UserCreatedListener.name);

  constructor(
    private readonly useCase: EventUseCases,
    private readonly converter: UserConverter,
  ) {}

  @OnEvent('user.created')
  handleUserCreatedEvent(event: UserCreatedEvent) {
    this.logger.debug(`User created: ${event.userId} (${event.username})`);
    const user = this.converter.toUser(event);
    this.useCase.create(user);
  }
}
