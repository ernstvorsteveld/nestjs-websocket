import { Test, TestingModule } from '@nestjs/testing';
import {
  MessagePublisher,
  MessagePublisherMock,
} from '../../port/out/message-api.publisher';
import { UserServiceImpl } from './user-api.service';

describe('UserApiService', () => {
  let service: UserServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserServiceImpl,
        {
          provide: MessagePublisher,
          useValue: MessagePublisherMock,
        },
      ],
    }).compile();

    service = module.get<UserServiceImpl>(UserServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
