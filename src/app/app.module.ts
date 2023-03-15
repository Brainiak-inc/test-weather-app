import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import {TabLabelComponent} from "./components/tab-component/tab-label/tab-label.component";
import {TabsComponent} from "./components/tab-component/tabs/tabs.component";
import {TabBodyComponent} from "./components/tab-component/tab-body/tab-body.component";
import {TabItemComponent} from "./components/tab-component/tab-item/tab-item.component";
import {HttpClientModule} from "@angular/common/http";
import { TabBodyItemComponent } from './components/tab-component/tab-body-item/tab-body-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TabLabelComponent,
    TabBodyComponent,
    TabItemComponent,
    TabsComponent,
    HomePageComponent,
    TabBodyItemComponent,
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
