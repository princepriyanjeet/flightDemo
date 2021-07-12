import { BreakpointObserver,  Breakpoints,  BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 800; 

@Component({
  selector: 'mtp-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  events: string[] = [];
  opened: boolean =false;
  isSmallScreen!: boolean;
  isAuthenticated!:boolean;
  @ViewChild(MatSidenav) child!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver,
              private router:Router) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`]).subscribe(
      (state:BreakpointState)=>{
        this.isSmallScreen = state.matches;
      }
    )
  }

  toggleSideNav():void{
    if(this.isAuthenticated && this.child!=null){
      this.child.toggle();
    }
  }

  authNotification(event:boolean){
    this.isAuthenticated=event;
    console.log(event);
  }

}
