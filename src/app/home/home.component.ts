import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { City } from '../models/city';
import { ActivatedRoute, Router } from '@angular/router';
import { Weatherdata } from '../models/Weatherdata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cityForecast: City = new City();
    towns: City[] = [];

    dataCities = [{ city: 'Lyon', state: 'FR' }, {city:'Sydney',state:'AU'}, {city:'Tokyo',state:'JP'}];

    constructor(public weatherService: WeatherService, private route: ActivatedRoute,) { }

    ngOnInit() {
        //this.loadWeather();
        this.route.data
            .subscribe((data: { weather: any }) => {
                console.log('data resolver in comp', data);
                console.log('data resolver in comp', data.weather);
                
                this.towns = data.weather;
            });
        this.towns.sort();
    }

    loadWeather(): void {
        for (let value of this.dataCities) {
            console.log(value);
            console.log(value.city);
            console.log(value.state);
            this.weatherService.getCity(value.city, value.state)
                .subscribe(city => {
                    console.log(city);
                    this.cityForecast = city;
                    this.towns.push(this.cityForecast);
                    console.log('list of towns', this.towns);
                })
        }
        this.towns.sort();
    }

}
