import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { DoctorServiceService } from '../service/doctor-service.service';

@Component({
  selector: 'app-addingdoctor',
  templateUrl: './addingdoctor.component.html',
  styleUrls: ['./addingdoctor.component.css']
})
export class AddingdoctorComponent implements OnInit {

  doctor = new Doctor();
  
  constructor(private _service : DoctorServiceService, private _router : Router) { }

  ngOnInit(): void 
  {

  }

  addDoctor()
  {
    this._service.addDoctorFromRemote(this.doctor).subscribe(
      data => {
        console.log("Doctor added Successfully");
        this._router.navigate(['/admindashboard']);
      },
      error => {
        console.log("process Failed");
        console.log(error.error);
      }
    )
  }

}
