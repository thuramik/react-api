import {
  Controller,
  Get, Post, Delete,
} from '@nestjs/common';
import { TaskManagerService } from './task-manager.service';

@Controller('tasks')
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}

  @Get()
  findAll() {
    return this.taskManagerService.findAll();
  }

  @Post()
  create(task) {
    return this.taskManagerService.add(task);
  }

  @Delete()
  delete(id) {
    return this.taskManagerService.remove(id);
  }
}
