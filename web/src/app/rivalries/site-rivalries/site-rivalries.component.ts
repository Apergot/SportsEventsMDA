import {Component, OnInit} from '@angular/core';
import {Rivalry} from '../rivalry';
import {RivalryService} from '../rivalry.service';
import {AuthService} from '../../auth/auth.service';
import {Enrollment} from '../../enrollments/enrollment';
import {EnrollmentService} from '../../enrollments/enrollment.service';

@Component({
  selector: 'app-site-rivalries',
  templateUrl: './site-rivalries.component.html',
  styleUrls: ['./site-rivalries.component.css']
})
export class SiteRivalriesComponent implements OnInit {
  rivalries: Rivalry[] = [];

  constructor(private rivalryService: RivalryService, private authService: AuthService, private enrollmentService: EnrollmentService) {
  }

  ngOnInit(): void {
    this.rivalryService.getRivalries().subscribe((rivalries) => (this.rivalries = rivalries));
  }

  displayPorcentage(capacity: number, enrolled: number) {
    const porcentage = Math.round(((enrolled * 100) / capacity));
    return porcentage + '%';
  }

  isLogged() {
    return this.authService.isAuthenticated();
  }

}
