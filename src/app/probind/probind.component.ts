import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probind',
  templateUrl: './probind.component.html',
  styleUrls: ['./probind.component.css']
})
export class ProbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 name:string="Dipali Bhosale";
 n1:string="Radha Sharma";
 enable:boolean=false;
 img:string="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg";
}
