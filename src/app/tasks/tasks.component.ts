import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task, User } from '../app.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { EventInfoWrapper } from '@angular/core/primitives/event-dispatch';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from "../ui/card/card.component";
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user?: User
  hideAddTask: boolean = true;

  constructor(private taskService: TaskService) { }

  get getSelectedUserTasks() {
    return this.taskService.getUserTasks(this.user);
  }

  // filterCompletedTasks(taskId: string | undefined) {
  //   this.taskService.filterCompletedTasks(taskId);
  // }

  hideAddTaskMenu(hideAddTask: boolean) {
    this.hideAddTask = hideAddTask;
  }
}
