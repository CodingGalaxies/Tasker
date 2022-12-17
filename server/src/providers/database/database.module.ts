import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/config/app/app.config.module';
import { AppConfigService } from 'src/config/app/app.config.service';
import { mongoDataSource, mysqlDataSource } from './database-connection';

@Module({
  imports: [AppConfigModule, ...mysqlDataSource, ...mongoDataSource],
  providers: [AppConfigService],
  exports: [],
})
export class DatabaseModule {}
