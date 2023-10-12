import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="Heloo";
today=Date();
user={
  Name:"Aditya",
  Age:27,
  Class:"MBA"
}
}
