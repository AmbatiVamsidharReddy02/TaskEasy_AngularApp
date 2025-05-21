import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../app.component';
import { CardComponent } from "../../ui/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!:Task;
  @Output() complete = new EventEmitter<string>();

  markTaskComplete(){
    this.complete.emit(this?.task?.id)
  }
}
