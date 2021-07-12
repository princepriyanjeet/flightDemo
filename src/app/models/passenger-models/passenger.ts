
export enum GENDERS  {
    "M","F"
};
export enum PassengerType{
    'Adult',
    'Infant'
}

export enum PassnegerCategory{
    'Family & Friends',
    'Doctor',
    'Student',
    'Armed Forces'
}

export enum PassengerIdType{
    'Driving License',
    'Aadhar card',
    'Passport',
    'Voter Id'
}

export interface Passenger{
    id?:string;
    firstName:String;
    lastName?: String;
    phone?:String,
    email?:string,
    passengerType:PassengerType;
    passengerIdType?:PassengerIdType;
    passengerIdNumber?:String;
    pnr:String;
    wheelChairAssitance?:boolean;
    isSeniorCitizen?:boolean;
    gender:GENDERS;
    isCarryingInfant:boolean;
    dob?:Date,
    flightCode:String,
    checkedInStatus:boolean

}