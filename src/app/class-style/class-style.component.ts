import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
isActive=false;

getInfo(){
  console.log(name)
}
 msg="Enter Text And Hit Enter key";
 ClickMe(name:any){
  this.msg=name;
 }
}
