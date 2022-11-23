import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../../models/tasks/schemas/task.schema';
import { DataTask } from '../tasks/dto/data-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

  async createTask(data: DataTask): Promise<boolean> {
    console.table(data);
    const newTask: Task = await new this.taskModel(data).save();
    console.log(`newTask: ${newTask}`);
    return true;
  }

  updateTask(id: string) {
    return id;
  }

  async findOneTask(id: string): Promise<Task> {
    return await this.taskModel.findOne({ id }).exec();
  }
}
