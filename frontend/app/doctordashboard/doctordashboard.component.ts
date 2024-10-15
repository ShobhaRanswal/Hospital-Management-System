import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../service/user-service.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent implements OnInit {

  name = '';
  gender = '';
  loggedUser = '';
  currRole = '';
  patients : Observable<any[]> | undefined;
  users : Observable<any[]> | undefined;
  doctors : Observable<any[]> | undefined;
  slots : Observable<any[]> | undefined;
  prescriptions : Observable<any[]> | undefined;
  
  constructor(private router : Router, private _service : UserServiceService,private authService:AuthService) { }

  ngOnInit(): void 
  {
    this.name = JSON.stringify(sessionStorage.getItem("ROLE")|| '{}');
    this.name = this.name.replace(/"/g, '');

    this.gender = JSON.stringify(sessionStorage.getItem('gender')|| '{}');
    this.gender = this.gender.replace(/"/g, '');

    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.patients = this._service.getTotalPatients();
    this.users = this._service.getTotalUsers();
    this.doctors = this._service.getTotalDoctors();
    this.slots = this._service.getTotalSlots();
    this.prescriptions = this._service.getTotalPrescriptions();
    
    $('.menuToggle').on('click',function(){
      $(this).toggleClass('menuToggle_open');
      $(".menu").toggleClass('hideMenu');
    
    });
  }
  logout() {
    this.authService.clearSession();

    // Redirect to the home page
    this.router.navigate(['/'],{ replaceUrl: true });
    // Show an alert message
    alert('Your are loging-out');
    localStorage.clear();

    this.clearCookies();
  }

  clearCookies() {
    // Retrieve all cookies
    const cookies = document.cookie.split(';');
  
    // Iterate over all cookies and delete them
    cookies.forEach(cookie => {
      const [name] = cookie.split('=');
      document.cookie = `${name.trim()}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
  }
}
