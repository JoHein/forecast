import { Injectable } from '@angular/core';
import {Router, Resolve,RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherResolverService implements Resolve<City> {

    dataCities = [{ city: 'Lyon', state: 'FR' }, { city: 'Sydney', state: 'AU' }, { city: 'Tokyo', state: 'JP' }];
    towns: City[] = [];

    constructor(private weatherServ: WeatherService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        any {
        this.towns = [];
        for (let value of this.dataCities) {
          
            this.weatherServ.getCity(value.city, value.state).subscribe(city => {

              this.towns.push(city);
            })

        }

        return this.towns;
    }
}
