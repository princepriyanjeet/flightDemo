import * as Domain from '../models/passenger-models/index';

export class PassengerData{
    static passengers:Domain.Passenger[]=[
        {
            id:'',
            firstName:'Kevin',
            lastName:'John',
            flightCode:'6E-700',
            passengerType:Domain.PassengerType.Adult,
            pnr:'1000012345',
            wheelChairAssitance:false,
            gender:Domain.GENDERS.M,
            isCarryingInfant:true,
            isSeniorCitizen:false,
            checkedInStatus:false,
            phone:'803-370-9279',
            email:'kevin@comcast.com'

        },
        {
            id:'',
            firstName:'Peter',
            lastName:'John',
            flightCode:'6E-700',
            passengerType:Domain.PassengerType.Infant,
            pnr:'1000012345',
            wheelChairAssitance:false,
            gender:Domain.GENDERS.M,
            isCarryingInfant:true,
            isSeniorCitizen:false,
            checkedInStatus:false,
            dob:new Date('07/01/2021')

        },
        {
            id:'',
            firstName:'Sarah',
            lastName:'John',
            flightCode:'6E-700',
            passengerType:Domain.PassengerType.Adult,
            pnr:'1000012345',
            wheelChairAssitance:false,
            gender:Domain.GENDERS.F,
            isCarryingInfant:false,
            isSeniorCitizen:false,
            checkedInStatus:false,
            email:'kevin@comcast.com'

        },
        {
            id:'',
            firstName:'Roberto',
            lastName:'Jonas',
            flightCode:'6E-700',
            passengerType:Domain.PassengerType.Adult,
            pnr:'1000012346',
            wheelChairAssitance:false,
            gender:Domain.GENDERS.F,
            isCarryingInfant:false,
            isSeniorCitizen:false,
            checkedInStatus:false,
            email:'robertoj@berizon.com'

        },
        {
            id:'',
            firstName:'Warren',
            lastName:'Buffet',
            flightCode:'6E-700',
            passengerType:Domain.PassengerType.Adult,
            pnr:'1000012347',
            wheelChairAssitance:true,
            gender:Domain.GENDERS.F,
            isCarryingInfant:false,
            isSeniorCitizen:true,
            checkedInStatus:false,
            email:'robertoj@berizon.com'

        }
    ]
}