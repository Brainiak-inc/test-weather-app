import {Component, ContentChild, EventEmitter, Input} from '@angular/core';
import {TabBodyComponent} from "../tab-body/tab-body.component";
import {TabLabelComponent} from "../tab-label/tab-label.component";
import * as events from "events";

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent {
  @Input() label: string;
  @Input() isActive: boolean;
  @Input() id: string;


  @ContentChild(TabBodyComponent) bodyComponent: TabBodyComponent;
  @ContentChild(TabLabelComponent) labelComponent: TabLabelComponent;
}
