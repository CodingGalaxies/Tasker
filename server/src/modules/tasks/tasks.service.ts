import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  createTask() {
    //
  }

  updateTask(id: string) {
    //
  }

  async findTaks(id: string): Promise<boolean> {
    //
    return true;
  }
}
