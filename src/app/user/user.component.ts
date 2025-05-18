import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input() avatar!: string;
    @Input({required:true}) id!: string;
    @Input() name!: string;
    @Input() alt!: string;
    @Output() select = new EventEmitter<string>();

    get imgPath(){
    return 'assets/users/' + this.avatar;
   }

   selectUser(){
      this.select.emit(this.id);
   }
}
