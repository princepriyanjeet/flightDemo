
export enum AncilliaryServiceType{
    Baggage,
    Meals,
    Drinks,
    LotteryTickets,
    SeatUpgrade,
    None
}

export interface Ancilliary{
    id: String;
    serviceType: AncilliaryServiceType;
    price:Number;
    quantity:Number,
    unit:String

}