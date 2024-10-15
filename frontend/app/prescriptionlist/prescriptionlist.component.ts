import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from '../models/prescription';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-prescriptionlist',
  templateUrl: './prescriptionlist.component.html',
  styleUrls: ['./prescriptionlist.component.css']
})
export class PrescriptionlistComponent implements OnInit {

  prescriptionlist : Observable<Prescription[]> | undefined;
  name : string = '';

  constructor(private _service : UserServiceService) { }

  ngOnInit(): void 
  {
    
    $('#messagecard').show();
    $('#prescriptionpages').hide();

  }

  searchPrescription()
  {
    this.prescriptionlist = this._service.getPrescriptionsByName(this.name);
    $('#messagecard').hide();
    $('#prescriptionpages').show();
  }

  onPrint()
  {
    $("#printbtn").hide();
    $("#prescriptionpages").css('margin-top','6%');
    window.print();
  }

}
