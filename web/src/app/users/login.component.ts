import { Component, OnInit } from '@angular/core';
import { User } from './user';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  title: string = 'Log in';
  user: User;
  errors: string[];

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      
      this.router.navigate(['/dashboard']);
    }
  }

  login(): void {
    console.log(this.user);
    if (this.user.username == null || this.user.password == null) {
      swal.fire('Error Login', 'Username or password empty!', 'error');
      return;
    }
    
    this.authService.login(this.user).subscribe(response => {
      
      console.log(response);

      this.authService.guardUser(response.access_token);
      this.authService.guardToken(response.access_token);
      let user = this.authService.user;
      this.router.navigate(['/dashboard']);
      swal.fire('Nombre', `${user.username} ${user.firstname}`, 'info');
    }, err => {
      if (err.status == 400) {
        swal.fire('Login error', `${err.status}`, 'error');
      }
    }
    );
  }

}
