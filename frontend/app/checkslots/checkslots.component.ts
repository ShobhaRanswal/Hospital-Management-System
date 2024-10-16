import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorServiceService } from '../service/doctor-service.service';
import { Slots } from '../models/slots';


@Component({
  selector: 'app-checkslots',
  templateUrl: './checkslots.component.html',
  styleUrls: ['./checkslots.component.css']
})
export class CheckslotsComponent implements OnInit {

  currRole = '';
  loggedUser = '';
  slots : Observable<Slots[]> | undefined;
  
  constructor(private _service : DoctorServiceService) { }

  ngOnInit(): void
  {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.slots = this._service.getSlotList();

  }

}
