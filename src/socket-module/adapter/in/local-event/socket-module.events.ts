import { Injectable } from '@nestjs/common';
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
  toUser(event: UserCreatedEvent): User {
    return new User(event.userId, event.username);
  }
}

@Injectable()
export class UserCreatedListener {
  constructor(
    private readonly useCase: EventUseCases,
    private readonly converter: UserConverter,
  ) {}
  @OnEvent('user.created')
  handleUserCreatedEvent(event: UserCreatedEvent) {
    console.log(`User created: ${event.userId} (${event.username})`);
    this.useCase.create(this.converter.toUser(event));
  }
}
