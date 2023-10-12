import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strint',
  templateUrl: './strint.component.html',
  styleUrls: ['./strint.component.css']
})
export class StrintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string="vidyashri patil";
  n2:string="Welcome to india";
  
    appStatus:boolean=true;
  add:string="Addition is";
  myfirst(){
    return "Welcome to Angular "+this.name;
  }  
add2(){
  
}

}
