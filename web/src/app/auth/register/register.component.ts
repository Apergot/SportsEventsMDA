import {Component, OnInit} from '@angular/core';
import {User} from '../../users/user';
import {UserService} from 'src/app/users/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

declare const toast: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  title = 'Sign up';
  user: User = new User();
  errors: string[];

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  create() {
    this.userService.create(this.user).subscribe(
      () => {
        this.loginAfterRegister();
        toast().fire({
          icon: 'success',
          title: `Signed up successfully`,
        });
      },
      (err) => {
        this.errors = err.error.errors as string[];
        console.error('Backend code error: ' + err.status);
        console.error(err.error.errors);
        toast().fire({
          icon: 'error',
          title: 'Server error: ' + err.status,
        });
      }
    );
  }

  loginAfterRegister() {
    this.authService.login(this.user).subscribe(response => {
        this.authService.guardUser(response.access_token);
        this.authService.guardToken(response.access_token);
        this.router.navigate(['/admin/dashboard']);
      }
    );
  }
}
