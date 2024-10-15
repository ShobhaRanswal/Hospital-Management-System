import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../service/login-service.service';


@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {
  
  constructor(private router: Router, private _service : LoginServiceService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
    if (this._service.isUserLoggedIn() && this._service.userType() === 'doctor' || this._service.userType() === 'Doctor') 
    {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
