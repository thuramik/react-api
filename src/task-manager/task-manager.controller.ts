import {
  Controller,
  Get,
} from '@nestjs/common';
import { TaskManagerService } from './task-manager.service';

@Controller('task-manager')
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}

  @Get()
  findAll() {
    return this.taskManagerService.findAll();
  }
}
