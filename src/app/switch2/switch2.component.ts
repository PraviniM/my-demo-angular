import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch2',
  templateUrl: './switch2.component.html',
  styleUrls: ['./switch2.component.css']
})
export class Switch2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
List:string="";
setbtn(m:string){
  this.List=m;
}
}
