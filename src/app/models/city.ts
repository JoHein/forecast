import { Weatherdata } from './Weatherdata';
import { Expose, Type } from "class-transformer";

export class City {
    @Expose({ name: "city_name" })
    city_name: string;
    @Expose({ name: "country_code" })
    country_code: string;
    @Expose({ name: "timezone" })
    timezone: string;

    @Expose({ name: "data" })
    @Type(() => Weatherdata)
    weather: Weatherdata[];
}
