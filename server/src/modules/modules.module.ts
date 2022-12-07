import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  providers: [],
  exports: [TasksModule],
})
export class ModulesModule {}
