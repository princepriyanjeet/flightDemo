import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'mtp-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() isSmallScreen:boolean = false;
  @Output() toggleSideNav :EventEmitter<void> = new EventEmitter<void>();
  @Output() authNotification:EventEmitter<boolean> = new EventEmitter<boolean>();
  isAuthenticated = false;
  
  constructor(private router:Router,public oktaAuth: OktaAuthService) { 
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
        this.authNotification.emit(this.isAuthenticated);
      }
    );
  }

 

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // returns an object with user's claims
    if(this.isAuthenticated){
      const userClaims = await this.oktaAuth.getUser();

      // user name is exposed directly as property
      console.log(userClaims.name);
    }
    

  }

  onClick():void {
    this.toggleSideNav.emit();
  }

  async login(): Promise<void> {
    await this.oktaAuth.signInWithRedirect();
  }

  
  async logout(): Promise<void> {
    await this.oktaAuth.signOut();
  }

}
