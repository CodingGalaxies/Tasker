import { Task } from 'src/models/schemas/task.schema';
import { TaskDto } from 'src/modules/tasks/dto/data-task.dto';

export interface DataTask {
  publicId: string;
  title: string;
  description: string;
  points: string;
  assigned: string;
  status: string;
}

export interface DataResponse {
  quantity?: number;
  msg?: string;
  result?: Task | boolean | null;
  tasks?: Task[];
}

export interface TaskFactory {
  createTask(data: TaskDto): DataTask;
}
