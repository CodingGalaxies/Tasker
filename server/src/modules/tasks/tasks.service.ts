import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../../models/tasks/schemas/task.schema';
import { DataTask } from '../tasks/dto/data-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

  async createTask(data: DataTask): Promise<boolean> {
    const newTask: Task = await new this.taskModel(data).save();
    return true;
  }

  async updateTask(id: string, data: DataTask) {
    const result = await this.taskModel.updateOne({ id }, {});
    return id;
  }

  async findOneTask(id: string): Promise<Task> {
    return await this.taskModel.findOne({ id }).exec();
  }

  async deleteOne(id: string) {
    try {
      const result = await this.taskModel.deleteOne({ id });
    } catch (error) {
      //
    }
    return;
  }
}
