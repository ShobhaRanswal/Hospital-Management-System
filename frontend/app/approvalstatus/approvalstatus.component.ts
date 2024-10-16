import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';
import { Appointment } from '../models/appointment';
import { DoctorServiceService } from '../service/doctor-service.service';


@Component({
  selector: 'app-approvalstatus',
  templateUrl: './approvalstatus.component.html',
  styleUrls: ['./approvalstatus.component.css']
})
export class ApprovalstatusComponent implements OnInit {

  currRole = '';
  loggedUser = '';
  mail = '';
  approval : Observable<Doctor[]> | undefined;
  appointment : Observable<Appointment[]> | undefined;

  constructor(private _service : DoctorServiceService) { }

  ngOnInit(): void
  {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.approval = this._service.getDoctorListByEmail(this.loggedUser);

    if(this.currRole === 'doctor')
    {
      $("#patientapproval").hide();
      $("#messagecard").hide();
      $("#doctorapproval").show();
    }
    else if(this.currRole === 'user')
    {
      $("#messagecard").show();
      $("#patientapproval").hide();
      $("#doctorapproval").hide();
    }
  }

  searchPatient()
  {
    this.appointment = this._service.getPatientListByEmail(this.mail);
    $("#messagecard").hide();
    $("#patientapproval").show();
  }
}
