import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: User ;
  title = 'Profile';
  errors: string[];

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
   this.user = this.authService.user;    
  }
}
