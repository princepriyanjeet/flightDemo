import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ConvertToTimePipe } from 'src/app/core/pipes/convert-to-time.pipes';


export const routes: Routes = [
  { path:'',component:FlightListComponent, children:[
    {path:':flightcode',component:FlightDetailComponent}
  ]
  
}

]

@NgModule({
  declarations: [
    FlightListComponent,
    FlightDetailComponent,
    ConvertToTimePipe
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class FlightsModule { }
