import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [],
  exports: [DatabaseModule],
})
export class ProvidersModule {}
