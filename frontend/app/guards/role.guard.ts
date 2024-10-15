import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';

// export const roleGuard: CanActivateFn = (route, state) => {
//   return true;
// };

Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const expectedRole = route.data.role;
    const userRole = this.authService.getRole();

    if (userRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
