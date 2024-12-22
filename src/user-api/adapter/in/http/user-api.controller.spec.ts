import { Test, TestingModule } from '@nestjs/testing';
import { UserApiUseCases } from '../../../port/in/user-api.usecases';
import {
  UserApiController,
  UserConverter,
  UserConverterImpl,
} from './user-api.controller';
import { UserApiUseCasesMock } from './user-api.usecases.mock';

describe('UserApiController', () => {
  let controller: UserApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserApiController],
      providers: [
        {
          provide: UserApiUseCases,
          useClass: UserApiUseCasesMock,
        },
        {
          provide: UserConverter,
          useClass: UserConverterImpl,
        },
      ],
    }).compile();

    controller = module.get<UserApiController>(UserApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
