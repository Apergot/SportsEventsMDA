import {Component, OnInit} from '@angular/core';
import {User} from '../../users/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  title = 'Register';

  errors: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
