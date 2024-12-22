import { Test, TestingModule } from '@nestjs/testing';
import { SocketModuleService } from './socket-module.service';

describe('SocketModuleService', () => {
  let service: SocketModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketModuleService],
    }).compile();

    service = module.get<SocketModuleService>(SocketModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
