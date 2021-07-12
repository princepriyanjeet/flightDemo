import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable,BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight} from '../../../models/flight-models/index';
import { MatButtonToggle,MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'mtp-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FlightListComponent  {

  
  @ViewChild(MatButtonToggleGroup) matToggleButtoGroup!:MatButtonToggleGroup;
  @ViewChild('matClearBtn') matClearButton!:MatButtonToggle;
  clearReset:String = 'Clear';

  private timeSelectedSubject = new BehaviorSubject<{startTime:number,endTime:number}>({startTime:0,endTime:24});
  timeSelectedAction$ = this.timeSelectedSubject.asObservable();

  constructor(private flightService:FlightsService) { }

  $flights:Observable<Flight[]> = combineLatest([
    this.flightService.getFlights(),
    this.timeSelectedAction$
  ]).pipe(
    map(([flights, selectedTime]) =>
      flights.filter(x=>x.departureTime>=selectedTime.startTime && x.departureTime<=selectedTime.endTime)
    ),
    tap(flights => console.log('After Filtered flights', JSON.stringify(flights)))
  );

  

  toggleClick(value:string){

    if(value==this.clearReset){
      this.timeSelectedSubject.next({startTime:0,endTime:23.59});

      if(this.matToggleButtoGroup!=null){
        this.matToggleButtoGroup.value='';
      }

    }else{
      var splitTime= value.split('-');

      if(Number(splitTime[0])>=16 && Number(splitTime[1])==0){
        splitTime[1]='23.59';
      }
      this.timeSelectedSubject.next({startTime:Number(splitTime[0]),endTime:Number(splitTime[1])});
      console.log(`Time selected ${splitTime[0]} ${splitTime[1]}`);

      if(this.matClearButton!=null){
        this.matClearButton.checked=false;
      }
    }
    
  }


  getColor(status:String):string { 

    switch (status) {
      case 'Scheduled':
        return '#56f000';
      case 'Delayed':
        return '#fce83a';
      case 'Cancelled':
        return '#ff3838';
      default:
        return '#9ea7ad'
    }
  }

}
