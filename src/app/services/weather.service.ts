import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { City } from '../models/city';
import { retry, catchError, map } from 'rxjs/operators';
import { plainToClass } from "class-transformer";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

    private readonly baseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
    private readonly keyApp = '692be1d8dc1c4a33ab6bb84ca8d4f9fb';
    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getCity(city: string, country: string): Observable<City> {
       const url = `${this.baseURL}city=${city}&country=${country}&key=${this.keyApp}`;
        return this.http.get<City>(url)
            .pipe(
                map(data => plainToClass(City, data, { excludeExtraneousValues: true })),
                retry(1),
                catchError(this.handleError)
        )
    }


    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}
