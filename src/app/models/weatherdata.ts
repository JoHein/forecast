import { Icondata } from './icondata';
import { Expose, Type } from "class-transformer";

export class Weatherdata {

    @Expose()
    app_max_temp: number;
    @Expose()
    app_min_temp: number;
    @Expose()
    clouds: number;
    @Expose()
    valid_date: string;
    @Expose()
    high_temp: number;
    @Expose()
    low_temp: number;
    //percentage change of rain
    @Expose()
    pop: number;
    //how much water
    @Expose()
    precip: number;
    @Expose()
    sunrise_ts: number;
    @Expose()
    sunset_ts: number;
    //average 
    @Expose()
    temp: number; 
    @Expose()
    wind_spd: number;
    @Expose({ name: "weather" })
    @Type(()=>Icondata)
    icon: Icondata;
}

