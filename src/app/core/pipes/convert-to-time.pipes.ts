import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toTime'
})

export class ConvertToTimePipe implements PipeTransform {

    transform(value: Number, ...args: any[]): String {
        
        var tempValue = String(value);
        if(tempValue.length<3){
            var hourPart = this.formatHourPart(tempValue);
            var timeFormat = this.getTimeFormat(Number(hourPart));
            tempValue = `${hourPart}:00 ${timeFormat}`
            return tempValue;
        }
        if(tempValue.length>=3){
            var time=tempValue.split('.');
            var hourPart = this.formatHourPart(time[0]);
            var minutePart = time[1].length==1 ? `${time[1]}0`:time[1];
            var timeFormat = this.getTimeFormat(Number(time[0]));
            tempValue = `${hourPart}:${minutePart} ${timeFormat}`;
        }
        return tempValue;
        
        
    }

    formatHourPart(time:string):string{
        var hourPart = time.length==1 ? `0${time}`:time;
        return hourPart;
    }

    getTimeFormat(hourPart:Number):string{
        var timeFormat = Number(hourPart)>=0 && Number(hourPart)<12 ? 'AM':'PM';
        return timeFormat;
    }
}