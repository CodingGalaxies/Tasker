import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateResult } from 'typeorm';
import { Task, TaskDocument } from '../../models/schemas/task.schema';
import { DataTask } from '../tasks/dto/data-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

  private readonly logger = new Logger(TasksService.name);

  async createTask(data: DataTask): Promise<boolean> {
    const newTask: Task = await new this.taskModel(data).save();
    this.logger.log('CREATED TASK');
    this.logger.verbose(newTask);
    return true;
  }

  async updateTask(id: string, data: DataTask) {
    const result = await this.taskModel.updateOne({ id }, {});
    return id;
  }

  async findOneTask(id: string): Promise<Task> {
    return await this.taskModel.findOne({ where: { id } }).exec();
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async deleteOne(id: string) {
    let result;
    try {
      result = await this.taskModel.deleteOne({ id }).exec();
    } catch (error) {
      this.logger.error(error);
    }
    this.logger.log('DELETED SUCESSFUL');
    return result;
  }
}
