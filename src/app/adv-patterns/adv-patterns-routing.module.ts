import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdvPatternsComponent } from './adv-patterns.component';


const advPatternsRoutes: Routes = [
  {
    path: '',
    component: AdvPatternsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(advPatternsRoutes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AdvPatternsRoutingModule { }