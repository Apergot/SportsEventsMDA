import { Injectable, ApplicationInitStatus } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint = 'http://localhost:8080/api/users';

  private httpHeaders = new HttpHeaders ({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as User[])
    );
  }

  delete(id : number): Observable<User> {
    return this.http
      .delete<User>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
      .pipe(
        catchError((e) => {
          console.error(e.error.message);
          swal.fire(e.error.message, e.error.error, "error");
          return throwError(e);
        })
      );
  }
}
