import { User } from 'src/user-api/domain/model/user';

export abstract class EventUseCases {
  abstract create(user: User): Promise<void>;
}
