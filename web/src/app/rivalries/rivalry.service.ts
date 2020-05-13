import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../users/user';
import {Rivalry} from './rivalry';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RivalryService {
  private urlEndPoint = 'http://localhost:8080/api/rivalries';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getRivalries(): Observable<Rivalry[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Rivalry[]));
  }

}
