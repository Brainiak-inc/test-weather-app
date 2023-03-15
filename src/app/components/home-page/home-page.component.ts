import {Component, OnInit} from '@angular/core';
import {GetDataService} from "../../services/data-service/get-data.service";
import {cityNames} from "../../entities/cityNames.enum";


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
  cityName: string
  cities: any[] = [
    {
      name: 'Москва',
      currentTemp: 0,
      high: 0,
      low: 0,
      windSpeed: 0,
    },
    {
      name: 'Санкт-Петербург',
      currentTemp: 0,
      high: 0,
      low: 0,
      windSpeed: 0,
    },
    {
      name: 'Екатеринбург',
      currentTemp: 0,
      high: 0,
      low: 0,
      windSpeed: 0,
    },
    {
      name: 'Владивосток',
      currentTemp: 0,
      high: 0,
      low: 0,
      windSpeed: 0,
    }
  ]


  getCityName(name: string): any{
    switch(name){
      case 'Moscow': this.cityName = cityNames.Msc;
        break;
      case 'Saint-Petersburg': this.cityName = cityNames.Spb;
        break;
    }
    console.log(this.cityName);
    return this.cityName;
  }

  ngOnInit(): void {
    this.weatherData.getCoordinates('Москва').subscribe(coords => {
      this.lat = coords[0].lat;
      this.lon = coords[0].lon;
      this.weatherData.getData(this.lat, this.lon).subscribe(data => {
        this.cities.map(city => {
          city.currentTemp = data.main.temp;
          city.high = data.main.temp_max;
          city.low = data.main.temp_min;
          city.windSpeed = data.wind.speed;
        })
      })
    })
  }

}
