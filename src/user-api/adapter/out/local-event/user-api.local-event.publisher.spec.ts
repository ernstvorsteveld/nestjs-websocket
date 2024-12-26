import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { LocalEventPublisher } from './user-api.local-event.publisher';

describe('LocalEventPublisher', () => {
  let publisher: LocalEventPublisher;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [],
      providers: [LocalEventPublisher],
    }).compile();

    publisher = module.get<LocalEventPublisher>(LocalEventPublisher);
  });

  it('should be defined', () => {
    expect(publisher).toBeDefined();
  });
});
