import { User } from 'src/user-api/domain/model/user';

export abstract class UserApiUseCases {
  abstract create(user: User): Promise<void>;
}
