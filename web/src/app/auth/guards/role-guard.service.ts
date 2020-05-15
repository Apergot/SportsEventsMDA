import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import swal from 'sweetalert2';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    // const role = next.data['role'] as string;
    // console.log(role);
    // if (this.authService.hasRole(role)) {
    //   return true;
    // }
    swal.fire('Access denied', `Hello, ${this.authService.user.username} you have not access!`, 'warning');
    this.router.navigate(['/user']);
    return false;
  }
}
