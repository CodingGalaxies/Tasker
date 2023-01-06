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
  HttpException,
  NotFoundException,
  InternalServerErrorException,
  HttpCode,
} from '@nestjs/common';
import { TaskDto } from './dto/data-task.dto';
import { TasksService } from './tasks.service';
import { Task } from '../../models/schemas/task.schema';
import { DataResponse } from 'src/common/interfaces/task';

@Controller('tasks')
export class TasksController {
  constructor(private _taskService: TasksService) {}

  private readonly logger = new Logger();

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readOneTask(
    @Param('id') id: string,
  ): Promise<Task | HttpException | null> {
    this.logger.log(`ID to Search: ${id}`);
    const task: Task | null = await this._taskService.findOneTask(id);
    if (!task) throw new NotFoundException('Not Exist Task!');
    return task;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getTasks(): Promise<HttpException | DataResponse> {
    const tasks: Task[] = await this._taskService.findAll();
    this.logger.log(tasks);
    if (tasks.length === 0) {
      throw new NotFoundException('No tasks');
    }
    return {
      quantity: tasks.length,
      tasks,
    };
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createTask(@Body() data: TaskDto): Promise<Task | boolean> {
    const result: Task | boolean = await this._taskService.createTask(data);
    return result;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateTask(
    @Body() data: TaskDto,
    @Param('id') id: string,
  ): Promise<Task | HttpException | boolean> {
    const result: boolean | Task = await this._taskService.updateTask(id, data);
    if (result) throw new NotFoundException('There is no task!');
    return result;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteTask(
    @Param('id') id: string,
  ): Promise<DataResponse | HttpException> {
    const result = await this._taskService.deleteOne(id);
    if (result === null)
      throw new NotFoundException(`Not exist task by: ${id}`);
    if (result === false)
      throw new InternalServerErrorException('Something bad happened', {
        description: 'An error occurred while deleting the task',
      });
    return {
      msg: 'Successfully removed!',
      result,
    };
  }
}
