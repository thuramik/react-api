import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskManagerModule } from './task-manager/task-manager.module';

@Module({
  imports: [TaskManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
