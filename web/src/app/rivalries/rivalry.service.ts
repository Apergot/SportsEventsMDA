import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Rivalry} from './rivalry';
import {catchError, map} from 'rxjs/operators';
import swal from 'sweetalert2';
import {AuthService} from '../auth/auth.service';
import {User} from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class RivalryService {
  private urlEndPoint = 'http://localhost:8080/api/rivalries';

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

  getRivalries(): Observable<Rivalry[]> {
    return this.http
      .get(this.urlEndPoint, {headers: this.addAuthHeader()})
      .pipe(map((response) => response as Rivalry[]));
  }

  create(rivalry: Rivalry): Observable<Rivalry> {
    return this.http
      .post(this.urlEndPoint, rivalry, {headers: this.addAuthHeader()})
      .pipe(
        map((response: any) => response.rivalry as Rivalry),
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

  update(rivalry: Rivalry): Observable<Rivalry> {
    return this.http
      .put<Rivalry>(`${this.urlEndPoint}/${rivalry.id}`, rivalry, {headers: this.addAuthHeader()})
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

  delete(id: number): Observable<Rivalry> {
    return this.http
      .delete<Rivalry>(`${this.urlEndPoint}/${id}`, {headers: this.addAuthHeader()})
      .pipe(
        catchError((e) => {
          console.error(e.error.message);
          swal.fire(e.error.message, e.error.error, 'error');
          return throwError(e);
        })
      );
  }

  getRivalry(id): Observable<Rivalry> {
    return this.http.get<Rivalry>(`${this.urlEndPoint}/${id}`, {headers: this.addAuthHeader()}).pipe(
      catchError((e) => {
        console.error(e.error.mensaje);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
}
