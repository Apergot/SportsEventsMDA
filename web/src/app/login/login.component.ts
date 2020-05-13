import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _User: User;
  private _token: string;

  constructor(private http: HttpClient) { }

  public get User(): User {
    if (this._User != null) {
      return this._User;
    } else if (this._User == null && sessionStorage.getItem('User') != null) {
      this._User = JSON.parse(sessionStorage.getItem('User')) as User;
      return this._User;
    }
    return new User();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  login(User: User): Observable<any> {
    const urlEndpoint = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', User.username);
    params.set('password', User.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });
  }

  guardarUser(accessToken: string): void {
    let payload = this.obtenerDatosToken(accessToken);
    this._User = new User();
    this._User.firstname = payload.nombre;
    this._User.lastname = payload.apellido;
    this._User.email = payload.email;
    this._User.username = payload.user_name;
    this._User.roles = payload.authorities;
    sessionStorage.setItem('User', JSON.stringify(this._User));
  }

  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
      return true;
    }
    return false;
  }
/*
  hasRole(role: string): boolean {
    if (this.User.roles.includes(role)) {
      return true;
    }
    return false;
  }*/

  logout(): void {
    this._token = null;
    this._User = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('User');
  }
}