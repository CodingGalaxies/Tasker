import { Task } from 'src/models/schemas/task.schema';

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
