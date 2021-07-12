export interface Flight{

    id: String;
    flightCode: String;
    company: String;
    destination: string;
    source: String;
    departureTime: Number;
    arrivalTime: Number;
    totalCapacity: Number;
    available: Number;
    allocated: Number;
    status:string,
    airBusFamily?:string;
}