import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {User} from '../../../users/user';
import {Rivalry} from '../../../rivalries/rivalry';
import {RivalryService} from '../../../rivalries/rivalry.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Enrollment} from '../../enrollment';
import {EnrollmentService} from '../../enrollment.service';

declare const toast: any;

@Component({
  selector: 'app-enrollments-form',
  templateUrl: './enrollments-form.component.html',
  styleUrls: ['./enrollments-form.component.css']
})
export class EnrollmentsFormComponent implements OnInit {
  rivalry: Rivalry = new Rivalry();
  user: User = new User();
  enrollment: Enrollment = new Enrollment();

  errors: string[];

  constructor(
    private authService: AuthService,
    private enrollmentService: EnrollmentService,
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
    this.enrollment.rivalry_id = this.rivalry.id;
    this.enrollment.user_id = this.user.id;
    console.log(this.enrollment);
    this.enrollmentService.create(this.enrollment).subscribe(
      () => {
        this.router.navigate(['rivalries']);
        toast().fire({
          icon: 'success',
          title: `Your enrollment has been created successfully`
        });
      },
      (err) => {
        this.errors = err.error.errors as string[];
        console.error('Backend code error: ' + err.status);
        console.error(err.error.errors);

        if (err.status === 406) {
          this.router.navigate(['rivalries']);
          toast().fire({
            icon: 'warning',
            title: 'You are already enrolled'
          });
        } else {
          toast().fire({
            icon: 'error',
            title: 'Server error:' + err.message
          });
        }

      }
    );
  }

}
