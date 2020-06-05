import {Injectable} from '@angular/core';

import {map, catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from './user';
import swal from 'sweetalert2';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlEndPoint = 'http://localhost:8080/api/users';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router,
              private authService: AuthService) {
  }

  private addAuthHeader() {
    const token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get(this.urlEndPoint, {headers: this.addAuthHeader()})
      .pipe(map((response) => response as User[]));
  }

  create(user: User): Observable<User> {
    return this.http
      .post(this.urlEndPoint, user, {headers: this.addAuthHeader()})
      .pipe(
        map((response: any) => response.user as User),
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

  update(user: User): Observable<User> {
    return this.http
      .put<User>(`${this.urlEndPoint}/${user.id}`, user, {headers: this.addAuthHeader()})
      .pipe(
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

  delete(id: number): Observable<User> {
    return this.http
      .delete<User>(`${this.urlEndPoint}/${id}`, {headers: this.addAuthHeader()})
      .pipe(
        catchError((e) => {
          console.error(e.error.message);
          swal.fire(e.error.message, e.error.error, 'error');
          return throwError(e);
        })
      );
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(`${this.urlEndPoint}/${id}`, {headers: this.addAuthHeader()}).pipe(
      catchError((e) => {
        console.error(e.error.mensaje);
        swal.fire('Error updating the user', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
}
