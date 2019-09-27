import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [

  {
    path: 'advPattern',
    loadChildren: () => import('./adv-patterns/adv-patterns.module').then(mod => mod.AdvPatternsModule),
    
  },
  {
    path: '',
    loadChildren: () => import('./weather/weather.module').then(mod => mod.WeatherModule),
    
  },
  {
    path: 'cats',
    loadChildren: () => import('./cats/cats.module').then(mod => mod.CatsModule),
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


