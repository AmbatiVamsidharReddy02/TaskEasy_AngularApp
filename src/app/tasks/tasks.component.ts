import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task, User } from '../app.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user?: User
  @Input({ required: true }) tasks?: Task[]
  @Output() completedTask = new EventEmitter<string>();

  markTasksComplete(taskId: string) {
    console.log(`task Emitted from tasks component with id :- ${taskId}`)
    this.completedTask.emit(taskId);
  }
}
