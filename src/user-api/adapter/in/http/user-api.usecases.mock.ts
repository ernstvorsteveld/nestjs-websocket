import { Injectable } from '@nestjs/common';
import { User } from 'src/user-api/domain/model/user';
import { UserApiUseCases } from 'src/user-api/port/in/user-api.usecases';

@Injectable()
export class UserApiUseCasesMock implements UserApiUseCases {
  private user: User;

  create(user: User): Promise<void> {
    this.user = user;
    return Promise.resolve();
  }

  getUser(): Promise<User> {
    return Promise.resolve(this.user);
  }
}
