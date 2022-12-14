import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TasksModule, UserModule],
  providers: [],
  exports: [TasksModule, UserModule],
})
export class ModulesModule {}
