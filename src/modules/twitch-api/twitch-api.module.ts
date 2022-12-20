import { Module, Global, Logger } from '@nestjs/common';
import { TwitchApiService } from './twitch-api.service';

@Global()
@Module({
  providers: [Logger, TwitchApiService],
  exports: [TwitchApiService],
})
export class TwitchApiModule {}
