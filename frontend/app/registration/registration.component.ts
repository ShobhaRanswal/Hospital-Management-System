import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';
import { User } from '../models/user';
import { Doctor } from '../models/doctor';
import { RegistrationServiceService } from '../service/registration-service.service';
import { DoctorServiceService } from '../service/doctor-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  doctor = new Doctor();
   msg = ' ';
  
  constructor(private _registrationService : RegistrationServiceService, private _doctorService : DoctorServiceService, private _router : Router) { }

  ngOnInit(): void 
  {
    $(".nav1").addClass("highlight1")
    $("#home-tab").click(function(){
      $("#profile").hide();
      $("#home").show();
      $(".nav1").addClass("highlight1")
      $(".nav2").removeClass("highlight2")
    });
    $("#profile-tab").click(function(){
      $("#home").hide();
      $("#profile").show();
      $(".nav2").addClass("highlight2")
      $(".nav1").removeClass("highlight1")
    });
  }

  registerUser()
  {
    this._registrationService.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("Registration Success");
        sessionStorage.setItem("username",this.user.username);
        sessionStorage.setItem("gender",this.user.gender);
        this._router.navigate(['/registrationsuccess']);
      },
      error => {
        console.log("Registration Failed");
        console.log(error.error);
        this.msg = "User with "+this.user.email+" already exists !!!";
      }
    )
  }

  registerDoctor()
  {
    this._registrationService.registerDoctorFromRemote(this.doctor).subscribe(
      data => {
        console.log("Registration Success");
        sessionStorage.setItem("doctorname",this.doctor.doctorname);
        sessionStorage.setItem("gender",this.doctor.gender);
        this._router.navigate(['/registrationsuccess']);
      },
      error => {
        console.log("Registration Failed");
        console.log(error.error);
        this.msg = "Doctor with "+this.user.email+" already exists !!!";
      }
    )
  }

}
