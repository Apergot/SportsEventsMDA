import {Component, OnInit} from '@angular/core';
import {User} from '../users/user';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  title = 'Profile';
  errors: string[];

  constructor(private authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
    this.user = this.authService.user;
  }
}
