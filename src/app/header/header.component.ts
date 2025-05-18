import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imgAlt = 'TODO APP'
  get headerImg(){
    return 'assets/task-management-logo.png';
  }
}
