import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//import { DoctorService } from 'src/app/services/doctor.service';
import { DoctorServiceService } from '../service/doctor-service.service';
import { Appointment } from '../models/appointment';
import { Slots } from '../models/slots';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  
  loggedUser = '';
  currRole = '';
  appointments : Observable<Appointment[]> | undefined;
  slots : Observable<Slots[]> | undefined;

  constructor(private _service : DoctorServiceService) { }

  ngOnInit(): void
  {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.appointments = this._service.getPatientListByDoctorEmailAndDate(this.loggedUser);
    this.slots = this._service.getSlotDetails(this.loggedUser);
  }

}
