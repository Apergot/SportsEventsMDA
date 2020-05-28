import {Component, OnInit} from '@angular/core';
import {User} from '../../users/user';
import swal from 'sweetalert2';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

declare const toast: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  title = 'Sign in';
  user: User;
  errors: string[];

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  login(): void {
    this.authService.login(this.user).subscribe(response => {
        this.authService.guardUser(response.access_token);
        this.authService.guardToken(response.access_token);
        this.router.navigate(['/admin/dashboard']);
      }, err => {
        if (err.status === 400) {
          toast().fire({
            icon: 'error',
            title: 'Server error: ' + err.status
          });
        }
      }
    );
  }

}
