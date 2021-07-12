import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import * as Domain from '../../models/passenger-models/index';

@Injectable({providedIn: 'root'})
export class PassengerService {

    private passengerUrl = 'api/passengers';
    constructor(private httpClient: HttpClient) { }
    
    getAllPassenger(flightCode:String):Observable<Domain.Passenger[]>{
        return this.httpClient.get<Domain.Passenger[]>(this.passengerUrl)
                              .pipe(
                                  tap(data=>console.log(JSON.stringify(data))),
                                  map(data=>data.filter(x=>x.flightCode===flightCode))
                                  );
                              
    }

    findPassengerByPnr(flightCode:String,pnr:String):Observable<Domain.Passenger[]>{
        return this.httpClient.get<Domain.Passenger[]>(this.passengerUrl)
                              .pipe(
                                  tap(data=>console.log(JSON.stringify(data))),
                                  map(data=>data.filter(x=>
                                     x.flightCode===flightCode && x.pnr===pnr))
                                  );
    }

}