import {  Ancilliary,AncilliaryServiceType } from '../models/flight-models/ancilliary';

export class AncilliaryData{
    static ancilliaries: Ancilliary[]=[
        {
            id:'ccbaceda-e088-11eb-ba80-0242ac130004',
            serviceType:AncilliaryServiceType.Baggage,
            price:1000,
            quantity:1,
            unit:'kg'
        },
        {
            id:'d7ac3234-e088-11eb-ba80-0242ac130004',
            serviceType:AncilliaryServiceType.Drinks,
            price:2000,
            quantity:60,
            unit:'ml'
        },
        {
            id:'df3a31d6-e088-11eb-ba80-0242ac130004',
            serviceType:AncilliaryServiceType.LotteryTickets,
            price:100,
            quantity:1,
            unit:'card'
        },
        {
            id:'e516de74-e088-11eb-ba80-0242ac130004',
            serviceType:AncilliaryServiceType.SeatUpgrade,
            price:250,
            quantity:1,
            unit:'Per Persson'
        },
        {
            id:'e516de74-e088-11eb-ba80-0242ac130004',
            serviceType:AncilliaryServiceType.Meals,
            price:500,
            quantity:1,
            unit:'Per Persson'
        }
    ];
}