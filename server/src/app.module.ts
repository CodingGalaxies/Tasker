import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasks/tasks.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { AppConfigService } from './config/app/app.config.service';
import { key } from './config/config.key';

@Module({
  imports: [
    ConfigModule,
    AppModule,
    MongooseModule.forRoot(`mongodb://localhost:27017/tasker_db`),
    TasksModule,
    UserModule,
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
