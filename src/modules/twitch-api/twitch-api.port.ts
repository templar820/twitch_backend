import { Nullable } from '@core/types/nullable.type';

export interface TwitchUserInfo {
  userId: string;
  login: string;
  displayName: string;
  profileImageUrl: string;
}

export interface TwitchTokenResponse {
  accessToken: string;
  expiresIn: number;
}

export interface TwitchApiPort {
  requestApplicationToken(): Promise<Nullable<TwitchTokenResponse>>;
  getApplicationToken(): Promise<Nullable<string>>;
  getTwitchUserInfo(userId: string): Promise<Nullable<TwitchUserInfo>>;
}
