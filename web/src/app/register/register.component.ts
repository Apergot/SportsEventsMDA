import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: User = new User();
  title = 'Create User';

  errors: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
