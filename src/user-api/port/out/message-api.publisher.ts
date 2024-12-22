import { log } from 'console';
import { User } from '../../domain/model/user';

export abstract class MessagePublisher {
  abstract userCreated(user: User): void;
}

export class MessagePublisherMock implements MessagePublisher {
  userCreated(user: User): void {
    log(user);
    console.log('user created');
  }
}
