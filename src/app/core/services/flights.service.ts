import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Domain from '../../models/flight-models/index';
import { Observable,BehaviorSubject, combineLatest } from 'rxjs';
import { tap,map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class FlightsService {

    private flightUrl = 'api/flights';
    private flightAncilliary = 'api/ancilliaries';

    
    private timeSelectedSubject = new BehaviorSubject<{startTime:number,endTime:number}>({startTime:0,endTime:24});
    timeSelectedAction$ = this.timeSelectedSubject.asObservable();

    constructor(private httpClient: HttpClient) { }

    selectedTime$ = combineLatest([
        this.getFlights(),
        this.timeSelectedAction$
      ]).pipe(
        map(([flights, selectedTime]) =>
          flights.filter(x=>x.departureTime>=selectedTime.startTime && x.arrivalTime<=selectedTime.endTime)
        )
      );

    getFlights() : Observable<Domain.Flight[]>{
        return this.httpClient.get<Domain.Flight[]>(this.flightUrl)
                              .pipe(
                                  tap(data=>console.log(JSON.stringify(data)))
                              )
    }

    getAncilliaries():Observable<Domain.Ancilliary[]>{
        return this.httpClient.get<Domain.Ancilliary[]>(this.flightAncilliary)
                              .pipe(
                                  tap(data=>console.log(JSON.stringify(data)))
                              )
    }
    
}