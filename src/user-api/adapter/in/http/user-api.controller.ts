import { Controller, Injectable, Post } from '@nestjs/common';
import { User } from '../../../domain/model/user';
import { UserApiUseCases } from '../../../port/in/user-api.usecases';

export class UserPayload {
  id: string;
  name: string;
}

export abstract class UserConverter {
  abstract toDomain(user: UserPayload): User;
}

@Injectable()
export class UserConverterImpl implements UserConverter {
  toDomain(user: UserPayload): User {
    return {
      userId: user.id,
      username: user.name,
    };
  }
}

@Controller('user-api')
export class UserApiController {
  constructor(
    private readonly userConverter: UserConverter,
    private readonly userApiUseCases: UserApiUseCases,
  ) {}

  @Post()
  create(user: UserPayload): Promise<void> {
    return this.userApiUseCases.create(this.userConverter.toDomain(user));
  }
}
