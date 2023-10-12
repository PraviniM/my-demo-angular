import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 picUri="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/best-fruits-1197259281-770x533-1-650x428.jpg";
 img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfhkgLrSSc3sxg2LKMR3Oih7nCpjOU4y4aQ&usqp=CAU";
 pnj="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Coconuts_-_single_and_cracked_open.jpg/450px-Coconuts_-_single_and_cracked_open.jpg";
 pic="http://www.postharvest.biz/_images/newscompany/78213/13798_modal.png";
}
