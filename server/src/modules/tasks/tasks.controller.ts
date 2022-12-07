import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Response,
} from '@nestjs/common';
import { DataTask } from './dto/data-task.dto';
import { TasksService } from './tasks.service';
import { Task } from '../../models/tasks/schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private _taskService: TasksService) {}

  @Get(':id')
  async readOneTask(@Param('id') id: string, @Response() res) {
    const find: Task = await this._taskService.findOneTask(id);
    return res.json('').HttpStatus.OK;
  }

  @Get()
  async readTaskAll() {
    const task = await this._taskService.findAll();
    return task;
  }

  @Post()
  async createTask(@Body() data: DataTask) {
    await this._taskService.createTask(data);
    return HttpStatus.OK;
  }

  @Put(':id')
  async updateTask(@Body() data: DataTask, @Param('id') id: string) {
    this._taskService.updateTask(id, data);
    return data;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return `Deleted: ${id}`;
  }
}
