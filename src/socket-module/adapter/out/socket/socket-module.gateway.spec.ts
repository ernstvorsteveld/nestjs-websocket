import { Test, TestingModule } from '@nestjs/testing';
import { SocketModuleGateway } from './socket-module.gateway';
import { SocketModuleService } from '../../../domain/service/socket-module.service';

describe('SocketModuleGateway', () => {
  let gateway: SocketModuleGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketModuleGateway, SocketModuleService],
    }).compile();

    gateway = module.get<SocketModuleGateway>(SocketModuleGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
