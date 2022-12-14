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
  Logger,
} from '@nestjs/common';
import { DataTask } from './dto/data-task.dto';
import { TasksService } from './tasks.service';
import { Task } from '../../models/schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private _taskService: TasksService) {}

  private readonly logger = new Logger();

  @Get(':id')
  async readOneTask(@Param('id') id: string, @Response() res) {
    const task: Task = await this._taskService.findOneTask(id);
    return res.json(task).HttpStatus.OK;
  }

  @Get()
  async getTasks(): Promise<Task[]> {
    const tasks: Task[] = await this._taskService.findAll();
    this.logger.log(tasks);
    return tasks;
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
    return this._taskService.deleteOne(id);
  }
}
