import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../app.component';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  inputTitle = '';
  inputSummary = '';
  inputDate = '';
  @Output() hideAddTaskEmitter = new EventEmitter<boolean>();
  @Output() emitAddedTask = new EventEmitter<Task>();

  constructor(private taskService:TaskService){}

  hideAddTask(){
    this.hideAddTaskEmitter.emit(true);
  }

  onSubmit(){
    let task: Task = {
      dueDate: this.inputDate,
      id: "",
      summary: this.inputSummary,
      title: this.inputTitle,
      userId: ""
    }
    this.emitAddedTask.emit(task);

    // use service instead of emitting the task. 

  }
}
