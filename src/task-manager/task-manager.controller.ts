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
  create() {
    return true;
  }

  @Delete()
  delete() {
    return true;
  }
}
