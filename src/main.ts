import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  await app.listen(config.get(`port`));

  const logger = new Logger(`Bootstrap`);
  logger.debug(`This application is runnning on: ${await app.getUrl()}\n\n`);

  app.enableShutdownHooks();
}
bootstrap();
