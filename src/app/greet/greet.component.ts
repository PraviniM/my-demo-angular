import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
name="Meenakshi";
picUrl="https://picsum.photos/200/300";

picsum="https://picsum.photos/seed/picsum/200/300";
  constructor() { }

  ngOnInit(): void {
  }

}
