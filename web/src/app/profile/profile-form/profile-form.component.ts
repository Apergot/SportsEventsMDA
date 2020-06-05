import {Component, OnInit} from '@angular/core';
import {User} from '../../users/user';
import {UserService} from 'src/app/users/user.service';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

declare const toast: any;

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html'
})
export class ProfileFormComponent implements OnInit {
  user: User;
  title = 'Update User';

  errors: string[];

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = +params.get('id');
      if (id) {
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
        this.authService._user = this.user;
        this.router.navigate(['/admin/profile']);
        toast().fire({
          icon: 'success',
          title: `Profile updated successfully`
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

}
