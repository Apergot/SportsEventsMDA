import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html'
})
export class AdminSidebarComponent implements OnInit {
  userDisplayName;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userDisplayName = this.authService.user.username;
  }
}
