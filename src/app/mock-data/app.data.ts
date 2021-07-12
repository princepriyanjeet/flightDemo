import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FlightData } from '../mock-data/flight.data';
import { AncilliaryData } from './ancilliary.data';
import { PassengerData } from './passenger.data';
import * as Domain from '../models/index';

export class AppData implements InMemoryDbService{

    createDb():{ flights: Domain.Flight[], ancilliaries: Domain.Ancilliary[], passengers: Domain.Passenger[]}{

        const flights = FlightData.flights;
        const ancilliaries = AncilliaryData.ancilliaries;
        const passengers = PassengerData.passengers;

        return {flights, ancilliaries, passengers};
        
    }
}