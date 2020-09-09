import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";
import { Task } from './entities/task.entity';

@Injectable()
export class TaskManagerService {
  // private tasks: Task[] = [
  //   {
  //     id: 'A-1',
  //     title: 'learn GIT',
  //     isCompleted: true
  //   },
  //   {
  //     id: 'A-2',
  //     title: 'learn ES',
  //     isCompleted: false
  //   },
  //   {
  //     id: 'A-3',
  //     title: 'learn PHP',
  //     isCompleted: true
  //   },
  // ];

  constructor(
      @InjectRepository(Task)
      private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async add(task: Task): Promise<void> {
    await this.tasksRepository.insert(task);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
