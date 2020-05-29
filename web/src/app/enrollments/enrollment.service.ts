import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import swal from 'sweetalert2';
import {Enrollment} from './enrollment';
import {User} from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private urlEndPoint = 'http://localhost:8080/api/enrollments';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  private addAuthHeader() {
    const token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getEnrollments(): Observable<Enrollment[]> {
    return this.http
      .get(this.urlEndPoint, {headers: this.addAuthHeader()})
      .pipe(map((response) => response as Enrollment[]));
  }

  create(enrollment: Enrollment): Observable<Enrollment> {
    return this.http
      .post(this.urlEndPoint, enrollment, {headers: this.addAuthHeader()})
      .pipe(
        map((response: any) => response.enrollment as Enrollment),
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e);
          }

          console.error(e.error.mensaje);
          swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
  }

}
