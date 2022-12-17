import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Logger,
} from '@nestjs/common';
import { TaskDto } from './dto/data-task.dto';
import { TasksService } from './tasks.service';
import { Task } from '../../models/schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private _taskService: TasksService) {}

  private readonly logger = new Logger();

  @Get(':id')
  async readOneTask(@Param('id') id: string) {
    console.log('ID:', id);
    const task: Task | null = await this._taskService.findOneTask(id);
    return task;
  }

  @Get()
  async getTasks(): Promise<Task[]> {
    const tasks: Task[] = await this._taskService.findAll();
    this.logger.log(tasks);
    return tasks;
  }

  @Post()
  async createTask(@Body() data: TaskDto) {
    await this._taskService.createTask(data);
    return HttpStatus.OK;
  }

  @Put(':id')
  async updateTask(@Body() data: TaskDto, @Param('id') id: string) {
    const result = await this._taskService.updateTask(id, data);
    return result;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this._taskService.deleteOne(id);
  }
}
