import { Test, TestingModule } from '@nestjs/testing';
import { EventUseCases } from '../../../port/in/socket-module.usecases';
import { SocketModuleService } from '../../../domain/service/socket-module.service';
import { UserConverter, UserCreatedListener } from './socket-module.events';
import { SocketModuleGateway } from '../../out/socket/socket-module.gateway';
import { SocketModuleGatewayMock } from '../../out/socket/socket-module.gateway.mock';

describe('UserCreatedListener', () => {
  let listener: UserCreatedListener;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: SocketModuleGateway,
          useClass: SocketModuleGatewayMock,
        },
        UserCreatedListener,
        {
          provide: EventUseCases,
          useClass: SocketModuleService,
        },
        UserConverter,
      ],
    }).compile();

    listener = module.get<UserCreatedListener>(UserCreatedListener);
  });

  it('should be defined', () => {
    expect(listener).toBeDefined();
  });

  it('should be possible to call create method', () => {
    const user = new UserConverter().toUser({
      userId: 'user-id',
      username: 'username',
    });
    listener.handleUserCreatedEvent(user);
  });
});
