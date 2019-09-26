import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherComponent } from './weather.component';
import { AddCardComponent } from '../add-card/add-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    WeatherCardComponent,
    WeatherComponent,
    AddCardComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
