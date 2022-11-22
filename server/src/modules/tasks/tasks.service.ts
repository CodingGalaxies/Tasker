import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  createTask() {
    return;
  }

  updateTask(id: string) {
    return;
  }

  async findTaks(id: string): Promise<boolean> {
    return true;
  }
}
