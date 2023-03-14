import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-body-item',
  templateUrl: './tab-body-item.component.html',
  styleUrls: ['./tab-body-item.component.scss']
})
export class TabBodyItemComponent {
  @Input() currentTemp: number;
  @Input() high: number;
  @Input() low: number;
  @Input() windSpeed: number;
}
