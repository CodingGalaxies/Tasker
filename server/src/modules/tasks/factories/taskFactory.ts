import { Injectable } from '@nestjs/common';
import { DataTask, TaskFactory } from 'src/common/interfaces/task';
import { TaskDto } from '../dto/data-task.dto';
import { v4 } from 'uuid';

export class Task implements DataTask {
  publicId: string;
  title: string;
  description: string;
  points: string;
  assigned: string;
  status: string;

  constructor(data: TaskDto) {
    this.publicId = v4().split('-')[0];
    this.title = data.title;
    this.description = data.description;
    this.points = data.points;
    this.assigned = data.assigned || '';
    this.status = data.status;
  }
}

@Injectable()
export class TaskFactoryImpl implements TaskFactory {
  createTask(data: TaskDto): DataTask {
    return new Task(data);
  }
}
