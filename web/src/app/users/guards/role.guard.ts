import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private LoginService: LoginService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.LoginService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    let role = next.data['role'] as string;
    console.log(role);
    if (this.LoginService.hasRole(role)) {
      return true;
    }
    swal.fire('Acceso denegado', `Hola ${this.LoginService.user.username} no tienes acceso a este recurso!`, 'warning');
    this.router.navigate(['/user']);
    return false;
  }
}
