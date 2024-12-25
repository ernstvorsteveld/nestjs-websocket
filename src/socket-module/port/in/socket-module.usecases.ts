import { User } from '../../domain/model/socket-module.user';

export abstract class EventUseCases {
  abstract create(user: User): Promise<void>;
}
