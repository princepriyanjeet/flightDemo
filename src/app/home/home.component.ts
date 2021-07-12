import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title:String ="Checkin Simulator";
  constructor() { }

  ngOnInit(): void {
  }

}
