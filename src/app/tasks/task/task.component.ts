import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../app.component';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!:Task;
  @Output() complete = new EventEmitter<string>();

  markTaskComplete(){
    console.log(`task emitted with taskId :- ${this.task.id}`)
    this.complete.emit(this?.task?.id)
  }
}
