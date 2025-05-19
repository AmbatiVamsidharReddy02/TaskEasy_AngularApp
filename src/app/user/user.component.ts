import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../app.component';

@Component({
   selector: 'app-user',
   imports: [CommonModule],
   standalone: true,
   templateUrl: './user.component.html',
   styleUrl: './user.component.css'
})
export class UserComponent {
   @Input() user!: User
   @Input() selected!: boolean
   @Output() select = new EventEmitter<string>();

   get imgPath() {
      return 'assets/users/' + this.user.avatar;
   }

   selectUser() {
      this.select.emit(this.user.id);
   }
}
