import {Component, OnInit} from '@angular/core';
import {GetDataService} from "../services/data-service/get-data.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(private weatherData: GetDataService) {
  }
  lat: number;
  lon: number;
  currentTemp: number;
  high: number;
  low: number;
  windSpeed: number;
  ngOnInit(): void {
    this.weatherData.getCoordinates('Moscow').subscribe(coords => {
      this.lat = coords[0].lat;
      this.lon = coords[0].lon;
      this.weatherData.getData(this.lat, this.lon).subscribe(data => {
        this.currentTemp = data.main.temp;
        this.high = data.main.temp_max;
        this.low = data.main.temp_min;
        this.windSpeed = data.wind.speed;
      })
    })
  }

}
