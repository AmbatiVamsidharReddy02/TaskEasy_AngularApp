import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../app.component';
import { CardComponent } from "../../ui/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!:Task;

  constructor(private taskService:TaskService) {}
  
  markTaskComplete(){
    this.taskService.filterCompletedTasks(this.task.id);
  }
}
