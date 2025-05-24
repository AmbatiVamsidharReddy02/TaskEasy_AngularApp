import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_TASKS } from './dummy-tasks';

export interface User {
  id: string
  name: string
  avatar: string
}

export interface Task {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,
}

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = DUMMY_USERS;
  currentUser!: User | undefined;
  viewCustomer(selectedUser: string | undefined) {
    // get the user with id 
    this.currentUser = this.users.find((user) => user.id == selectedUser);
  }  
}
