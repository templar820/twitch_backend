import { Controller, Get, Inject, Logger, LoggerService } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger: Logger;

  constructor(private readonly appService: AppService) {
    this.logger = new Logger(AppController.name);
    this.logger.log('AppController');
  }

  @Get()
  getHello(): string {
    this.logger.log('Hello');
    return this.appService.getHello();
  }
}
