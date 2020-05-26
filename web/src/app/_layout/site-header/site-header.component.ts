import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.logout();
  }

}
