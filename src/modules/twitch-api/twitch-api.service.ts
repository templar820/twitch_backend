import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axiosBase, { AxiosInstance } from 'axios';

import axiosRateLimit from 'axios-rate-limit';
import {
  TwitchApiPort,
  TwitchTokenResponse,
  TwitchUserInfo,
} from './twitch-api.port';
import { Nullable } from '@core/types/nullable.type';
// import cacheManager, { Cacheable } from '@type-cacheable/core';
// import { CACHE_DURATIONS } from '@config/cache-durations';
// import { cacheKey } from '@utils/cache-key.util';

@Injectable()
export class TwitchApiService implements TwitchApiPort {
  private httpService: AxiosInstance;
  private logger: Logger;

  constructor(
    private readonly config: ConfigService,
  ) {
    // this.logger(TwitchApiService.name);
    // this.httpService = axiosRateLimit(axiosBase.create(), {
    //   maxRPS: 2,
    // });
    this.logger = new Logger(TwitchApiService.name);
    this.logger.log("TWITCH")
  }

  // @ts-ignore
  public async requestApplicationToken(): Promise<
    Nullable<TwitchTokenResponse>
  > {
    // const url = `${this.config.get('TWITCH_AUTH_URL')}?client_id=${this.config.get('TWITCH_API_CLIENT_ID')}&client_secret=${this.config.get('TWITCH_API_SECRET_KEY')}&grant_type=client_credentials&scope=user:read:email`;
    // this.logger.debug(`Twitch API sending request, url = ${url}`);
    //
    // try {
    //   const config = {
    //     headers: {
    //       'X-Requested-With': 'XMLHttpRequest',
    //       'Client-ID': this.config.get('TWITCH_API_CLIENT_ID'),
    //     },
    //   };
    //   const { data } = await this.httpService.post(url, undefined, config);
    //   const { access_token, expires_in } = data || {};
    //
    //   return {
    //     accessToken: access_token,
    //     expiresIn: expires_in,
    //   };
    // } catch (err) {
    //   this.logger.error(`Twitch API request failed, error = ${err}`);
    // }
  }

  // @ts-ignore
  public async getApplicationToken(): Promise<Nullable<string>> {
    // const twitchApiTokenKey = 'twitchApiTokenKey';
    // const token = await cacheManager.client?.get(twitchApiTokenKey);
    //
    // if (token) {
    //   return token;
    // }
    //
    // const tokenResponse = await this.requestApplicationToken();
    // if (tokenResponse) {
    //   await cacheManager.client?.set(twitchApiTokenKey, tokenResponse.accessToken, tokenResponse.expiresIn);
    //
    //   return tokenResponse.accessToken;
    // }
    //
    // return null;
  }

  // @Cacheable({ ttlSeconds: CACHE_DURATIONS.TWITCH_DEFAULT_TTL, cacheKey: cacheKey('getTwitchUserInfo') })
  // @ts-ignore
  public async getTwitchUserInfo(
    userId: string,
  ): Promise<Nullable<TwitchUserInfo>> {
    // const url = `${this.config.get('TWITCH_API_URL')}users?id=${userId}`;
    // const accessToken = await this.getApplicationToken();
    //
    // this.logger.debug(`Twitch API sending request, url = ${url}`);
    //
    // try {
    //   const config = {
    //     headers: {
    //       'X-Requested-With': 'XMLHttpRequest',
    //       'Client-ID': this.config.get('TWITCH_API_CLIENT_ID'),
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   };
    //
    //   const { data } = await this.httpService.get(url, config);
    //   const response = data && Array.isArray(data.data) && data.data[0];
    //   const { display_name, profile_image_url, login } = response || {};
    //
    //   return {
    //     userId,
    //     login,
    //     displayName: display_name,
    //     profileImageUrl: profile_image_url,
    //   };
    // } catch (err) {
    //   this.logger.error(`Twitch API request failed, user id = ${userId}, error = ${err}`);
    // }

    return null;
  }
}
