import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getCoordinates(cityName: string): Observable<any> {
    return this.http.get<any>('http://api.openweathermap.org/geo/1.0/direct?q='+cityName+'&appid=a6f6165c0fb9d52deae45908b5e13f3b')
  }

  getData(lat: number, lon: number): Observable<any>{
    return this.http.get<any>("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=a6f6165c0fb9d52deae45908b5e13f3b&units=metric")
  }
}
