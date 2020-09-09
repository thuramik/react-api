import {
  Controller,
  Get, Post, Delete, Body, Param, Put,
} from '@nestjs/common';
import { TaskManagerService } from './task-manager.service';
import {CreateTaskDto} from "./dto/create-task.dto";
import {Task} from "./entities/task.entity";
import {UpdateTaskDto} from "./dto/update-task.dto";

@Controller('tasks')
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}

  @Get()
  findAll() {
    return this.taskManagerService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const task = this.taskManagerService.findById(id);
    task.then(task => {
      task.isCompleted = updateTaskDto.isCompleted;
      this.taskManagerService.save(task);
    })
    return;
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    const newTask = new Task();
    newTask.title = createTaskDto.title;
    this.taskManagerService.add(newTask);
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.taskManagerService.remove(id);
    return;
  }
}
