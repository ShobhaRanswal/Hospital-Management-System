import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';


@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {
  
  constructor(private router: Router, private _service : LoginServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this._service.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
