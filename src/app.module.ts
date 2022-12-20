import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TwitchApiModule } from './modules/twitch-api/twitch-api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TwitchApiModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
