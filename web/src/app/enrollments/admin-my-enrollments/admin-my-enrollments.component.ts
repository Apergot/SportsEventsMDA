import {Component, OnInit} from '@angular/core';
import {EnrollmentService} from '../enrollment.service';
import {UserEnrollment} from '../user-enrollment';
import swal from 'sweetalert2';
import {AuthService} from '../../auth/auth.service';

declare const toast: any;

@Component({
  selector: 'app-admin-my-enrollments',
  templateUrl: './admin-my-enrollments.component.html'
})
export class AdminMyEnrollmentsComponent implements OnInit {
  userEnrollments: UserEnrollment[];

  constructor(private authService: AuthService, private enrollmentService: EnrollmentService) {
  }

  ngOnInit(): void {
    this.enrollmentService.getUserEnrollments(this.authService.user).subscribe(
      (userEnrollments) => (this.userEnrollments = userEnrollments)
    );
  }

  delete(userEnrollment: UserEnrollment): void {
    swal
      .fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .then((result) => {
        if (result.value) {
          this.enrollmentService.delete(userEnrollment.enrollment_id).subscribe(() => {
            this.userEnrollments = this.userEnrollments.filter((u) => u !== userEnrollment);
            toast().fire({
              icon: 'success',
              title: `Enrollment removed successfully!`,
            });
          });
        }
      });
  }

}
