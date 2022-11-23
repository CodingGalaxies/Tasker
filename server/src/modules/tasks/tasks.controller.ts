import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DataTask } from './dto/data-task.dto';
import { TasksService } from './tasks.service';
import { Task } from '../../models/tasks/schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get(':id')
  async readOneTask(@Param('id') id: string) {
    console.log(`ID: ${id}`);
    const find: Task = await this.taskService.findOneTask(id);
    return find;
  }

  @Post()
  async createTask(@Body() data: DataTask) {
    await this.taskService.createTask(data);
    return data;
  }

  @Put(':id')
  async updateTask(@Body() data: DataTask, @Param('id') id: string) {
    console.log(`ID: ${id}`);
    console.table(data);
    return data;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    console.log(`ID: ${id}`);
    return `Deleted: ${id}`;
  }
}
