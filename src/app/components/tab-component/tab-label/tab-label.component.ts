import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.scss']
})
export class TabLabelComponent {
  @ViewChild(TemplateRef) labelContent: TemplateRef<any>;
}
