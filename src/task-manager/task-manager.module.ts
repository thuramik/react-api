import { Module } from '@nestjs/common';
import { TaskManagerController } from './task-manager.controller';
import { TaskManagerService } from './task-manager.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Task} from "./entities/task.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskManagerController],
  providers: [TaskManagerService]
})
export class TaskManagerModule {}
