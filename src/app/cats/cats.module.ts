import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { CatsListComponent } from './cats-list/cats-list.component';


@NgModule({
  declarations: [CatsComponent, CatsListComponent],
  imports: [
    CommonModule,
    CatsRoutingModule
  ]
})
export class CatsModule { }
