import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DataTask } from 'src/common/interfaces/task';
import { Task, TaskDocument } from '../../models/schemas/task.schema';
import { TaskDto } from '../tasks/dto/data-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

  private readonly logger = new Logger(TasksService.name);

  async createTask(data: DataTask): Promise<boolean | Task> {
    const newTask: Task = await new this.taskModel(data).save();
    this.logger.log('CREATED TASK');
    this.logger.verbose(newTask);
    return newTask;
  }

  async updateTask(id: string, data: TaskDto): Promise<boolean | Task> {
    this.logger.log('Searching Task...');
    const found: Task = await this.findOneTask(id);
    if (!found) return false;
    this.logger.log('Task Exist');
    const result: Task = await this.taskModel
      .findOneAndUpdate(
        { publicId: id },
        {
          title: data.title,
          description: data.description,
          points: data.points,
          assigned: data.assigned,
          status: data.status,
        },
      )
      .exec();
    return result;
  }

  async findOneTask(id: string): Promise<Task | null> {
    return await this.taskModel.findOne({ publicId: id });
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async deleteOne(id: string): Promise<boolean | null> {
    const found: Task | null = await this.findOneTask(id);
    if (!found) return null;
    let result;
    try {
      result = await this.taskModel.deleteOne({ id }).exec();
    } catch (error) {
      this.logger.error(error);
      result = false;
      throw new Error('An error occurred while deleting the task');
    }
    this.logger.log('DELETED SUCESSFUL');
    return result;
  }
}
