import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import {TabLabelComponent} from "./tab-component/tab-label/tab-label.component";
import {TabsComponent} from "./tab-component/tabs/tabs.component";
import {TabBodyComponent} from "./tab-component/tab-body/tab-body.component";
import {TabItemComponent} from "./tab-component/tab-item/tab-item.component";
import {HttpClientModule} from "@angular/common/http";
import { TabBodyItemComponent } from './tab-component/tab-body-item/tab-body-item.component';
import { TemperaturePipe } from './pipes/temperature-pipe/temperature-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabLabelComponent,
    TabBodyComponent,
    TabItemComponent,
    TabsComponent,
    HomePageComponent,
    TabBodyItemComponent,
    TemperaturePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
