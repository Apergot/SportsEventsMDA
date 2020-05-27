import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {User} from '../../../users/user';
import {Rivalry} from '../../../rivalries/rivalry';
import {RivalryService} from '../../../rivalries/rivalry.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-enrollments-form',
  templateUrl: './enrollments-form.component.html'
})
export class EnrollmentsFormComponent implements OnInit {
  rivalry: Rivalry = new Rivalry();
  user: User = new User();

  errors: string[];

  constructor(
    private authService: AuthService,
    private rivalryService: RivalryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = +params.get('id');
      if (id) {
        this.rivalryService.getRivalry(id).subscribe((rivalry) => {
          this.rivalry = rivalry;
          console.log(rivalry);
        });
      }
    });

    this.user = this.authService.user;
    console.log(this.user);
  }

  enroll() {
    console.log('sd');
  }

}
