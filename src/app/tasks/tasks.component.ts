import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task, User } from '../app.component';
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasksList: Task[] = DUMMY_TASKS;
  @Input({ required: true }) user?: User

  get getSelectedUserTasks(){
    return this.tasksList.filter((task)=> task.userId == this.user?.id);
  }

  filterCompletedTasks(taskId: string | undefined) {
    console.log(`task completed with task Id - ${taskId} arrived in app component`)
    this.tasksList = this?.tasksList?.filter((task) => task.id !== taskId);
  }
}
