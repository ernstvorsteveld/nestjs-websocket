import { Test } from '@nestjs/testing';
import { PublisherGateway } from './publisher.gateway';
import { INestApplication } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

async function createNestApp(...gateways: any): Promise<INestApplication> {
  const testingModule = await Test.createTestingModule({
    providers: gateways,
  }).compile();
  return testingModule.createNestApplication();
}

describe('ChatGateway', () => {
  let gateway: PublisherGateway;
  let app: INestApplication;
  let ioClient: Socket;

  beforeAll(async () => {
    // Instantiate the app
    app = await createNestApp(PublisherGateway);
    // Get the gateway instance from the app instance
    gateway = app.get<PublisherGateway>(PublisherGateway);
    // Create a new client that will interact with the gateway
    ioClient = io('http://localhost:3001', {
      autoConnect: false,
      transports: ['websocket', 'polling'],
    });

    app.listen(3001);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  it('should emit message on "ping"', async () => {
    ioClient.connect();
    const msg = 'The message that wil be send back!';
    ioClient.emit('ping', msg);
    await new Promise<void>((resolve) => {
      ioClient.on('connect', () => {
        console.log('connected');
      });
      ioClient.on('pong', (data) => {
        expect(data).toBe(msg);
        resolve();
      });
    });
    ioClient.disconnect();
  });
});
