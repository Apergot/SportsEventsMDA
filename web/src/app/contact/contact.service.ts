import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Contact} from './contact';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private urlEndPoint = 'http://localhost:8080/api/contact';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) {
  }

  sendContactForm(contact: Contact): Observable<Contact> {
    return this.http
      .post(this.urlEndPoint, contact, {headers: this.httpHeaders})
      .pipe(
        map((response: any) => response.contact as Contact),
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

