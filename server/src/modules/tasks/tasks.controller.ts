import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { DataTask } from './dto/data-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  createTask(@Body() data: DataTask) {
    console.table(data);
    return data;
  }

  @Put(':id')
  updateTask(@Body() data: DataTask, @Param('id') id: string) {
    console.log(`ID: ${id}`);
    console.table(data);
    const find = this.taskService.findTaks(id);
    return data;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    console.log(`ID: ${id}`);
    return `Deleted: ${id}`;
  }
}
