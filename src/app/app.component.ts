import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';

export interface User {
  id: string
  name: string
  avatar: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = DUMMY_USERS;
  currentUser!: User | undefined;
  viewTasks(selectedUser: string | undefined) {
    // get the user with id 
    this.currentUser = this.users.find((user) => user.id == selectedUser);
  }
}
