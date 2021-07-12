import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { FlightsService } from './core/services/flights.service';

@Component({
  selector: 'mtp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mtp-flight';
  isAuthenticated = false;
  constructor(){
    
  }

  ngOnInit() {
        
  }

 

}
