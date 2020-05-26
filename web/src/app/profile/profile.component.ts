import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UserService } from '../users/user.service';
import { Role } from '../users/role';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  title = 'Profile';

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /*this.activatedRoute.paramMap.subscribe((params) => {
      const id = +params.get('id');
      if (id) {
        this.title = 'Update user';
        this.userService.getUser(id).subscribe((user) => {
          this.user = user;
          console.log(user);
        });
      }
    });*/
  }
}
