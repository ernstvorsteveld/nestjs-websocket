import { Test, TestingModule } from '@nestjs/testing';
import {
  SocketService,
  SocketServiceImpl,
} from './socket-module.socket-service';

describe('SocketServiceImpl', () => {
  let service: SocketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: SocketService,
          useValue: SocketServiceImpl,
        },
      ],
    }).compile();

    service = module.get<SocketService>(SocketService);
  });

  it('SocketServiceImpl should be defined', () => {
    expect(service).toBeDefined();
  });
});
