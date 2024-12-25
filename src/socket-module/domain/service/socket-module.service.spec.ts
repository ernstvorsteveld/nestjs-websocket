import { Test, TestingModule } from '@nestjs/testing';
import { EventUseCases } from '../../port/in/socket-module.usecases';
import { SocketModuleGateway } from '../../adapter/out/socket/socket-module.gateway';
import { SocketModuleService } from './socket-module.service';

describe('SocketModuleService', () => {
  let service: SocketModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SocketModuleGateway,
        SocketModuleService,
        {
          provide: EventUseCases,
          useValue: SocketModuleService,
        },
      ],
    }).compile();

    service = module.get<SocketModuleService>(SocketModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
