import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { AppConfigService } from './config/app/app.config.service';
import { key } from './config/config.key';
import { ProvidersModule } from './providers/providers.module';
import { ModulesModule } from './modules/modules.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    AppModule,
    ConfigModule,
    ProvidersModule,
    CommonModule,
    ModulesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  static prefix: string;

  constructor(private readonly _appConfigSrv: AppConfigService) {
    AppModule.port = this._appConfigSrv.get<number>(key.PORT);
    AppModule.prefix = this._appConfigSrv.get<string>(key.PREFIX);
  }
}
