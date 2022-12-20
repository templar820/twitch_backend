import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createLogger } from './infrastructure/logger';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: createLogger(),
  });

  const config = app.get(ConfigService);

  const logger = new Logger('SYSTEM');

  await app.listen(config.get('APP_PORT', 3000), config.get('APP_INTERFACE'));

  logger.log(`Application is running on: ${await app.getUrl()}`);
  logger.log(`Database: ${config.get('DB_HOST')}:${config.get('DB_PORT')}`);
  logger.log(`Redis: ${config.get('REDIS_HOST')}:${config.get('REDIS_PORT')}`);
}

bootstrap();
