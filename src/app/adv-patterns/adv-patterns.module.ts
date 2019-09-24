import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvPatternsComponent } from './adv-patterns.component';
import { AdvPatternsRoutingModule } from './adv-patterns-routing.module';
import { SwitchComponent } from './switch/switch.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AdvPatternsComponent,
    SwitchComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule,
    AdvPatternsRoutingModule
  ],
  entryComponents:[

  ],
  providers: [ ]
})
export class AdvPatternsModule { }
