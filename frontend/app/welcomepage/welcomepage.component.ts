import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-welcomepage',
  templateUrl:'./welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit{
  isMenuHidden  =false;
  constructor(private activatedRoute: ActivatedRoute,private _router : Router) { }

  ngOnInit(): void 
  {
    
  }
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  navigate()
  {
    this._router.navigate(['/login']);
  }

}
