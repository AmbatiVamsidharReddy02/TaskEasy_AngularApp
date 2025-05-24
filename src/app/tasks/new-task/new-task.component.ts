import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() userId : string | undefined;
  @Output() hideAddTaskEmitter = new EventEmitter<boolean>();

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
    this.taskService.addTask(task, this.userId)
    this.hideAddTaskEmitter.emit(true);
  }
}
