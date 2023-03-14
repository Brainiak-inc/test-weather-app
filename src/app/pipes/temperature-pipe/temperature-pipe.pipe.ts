import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturePipe'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }

}
