import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { City } from '../models/city';
import { Weatherdata} from '../models/weatherdata';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cityForecast: City = new City();

    constructor(public weatherService: WeatherService) { }

    ngOnInit() {
        this.loadWeather();
    }

    loadWeather(): void {
        this.weatherService.getCity('Paris', 'FR')
            .subscribe(city => {
                console.log(city);
            })
    }

}
