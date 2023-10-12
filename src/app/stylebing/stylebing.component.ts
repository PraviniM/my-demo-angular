import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebing',
  templateUrl: './stylebing.component.html',
  styleUrls: ['./stylebing.component.css']
})
export class StylebingComponent implements OnInit {
   isActive=false;
  constructor() { }

  ngOnInit(): void {
  }
  course=[0];
Show=true;
}
