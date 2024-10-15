import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users : Observable<User[]> | undefined;

  constructor(private _serive : UserServiceService) { }

  ngOnInit(): void 
  {
    this.users = this._serive.getAllUsers();
  }

}
