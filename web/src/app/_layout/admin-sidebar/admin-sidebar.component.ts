import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../users/auth.service';
import {User} from '../../users/user';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  userDisplayName;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userDisplayName = this.authService.user.username + ' ' + this.authService.user.lastname;
  }

}
