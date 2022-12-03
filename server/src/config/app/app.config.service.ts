import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private _configService: ConfigService) {}

  get<T>(key: string): T {
    return this._configService.get(key);
  }
}
