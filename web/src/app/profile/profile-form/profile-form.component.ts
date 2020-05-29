import { Component, OnInit } from '@angular/core';
import {User} from '../../users/user';
import {Role} from '../../users/role';
import {UserService} from 'src/app/users/user.service';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
declare const toast: any;

@Component({
  selector: 'app-user-form',
  templateUrl: './profile-form.component.html'
})
export class ProfileFormComponent implements OnInit {
  user: User;
  title = 'Update User';

  errors: string[];

  roles: Role[] = [
    {id: 1, name: 'ROLE_USER'},
    {id: 2, name: 'ROLE_ADMIN'},
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = +params.get('id');
      if (id) {
        this.title = 'Update user';
        this.userService.getUser(id).subscribe((user) => {
          this.user = user;
          console.log(user);
        });
      }
    });
  }

  update() {
    this.userService.update(this.user).subscribe(
      () => {
        this.router.navigate(['/profile']);
        toast().fire({
          icon: 'success',
          title: `User has been updated successfully`
        });
        
      },
      (err) => {
        this.errors = err.error.errors as string[];
        console.error('Backend code error: ' + err.status);
        console.error(err.error.errors);
        toast().fire({
          icon: 'error',
          title: 'Server error: ' + err.status
        });
      }
    );
  }

  sessionUpdate(): void {
    sessionStorage.removeItem('user');    
  }
}
