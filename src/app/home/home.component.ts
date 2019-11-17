import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { City } from '../models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cityForecast: City = new City();
    towns: City[] = [];

    dataCities = [{ city:'Paris', state:'FR'}];

    constructor(public weatherService: WeatherService) { }

    ngOnInit() {
        this.loadWeather();
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
                })
        }

    }

}
