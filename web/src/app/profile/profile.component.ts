import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UserService } from '../users/user.service';
import { Role } from '../users/role';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
}
