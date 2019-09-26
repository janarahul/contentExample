import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvPatternsComponent } from './adv-patterns.component';
import { AdvPatternsRoutingModule } from './adv-patterns-routing.module';
import { SwitchComponent } from './switch/switch.component';
import { ToggleOnComponent } from './toggle/toggle.on.component';
import { ToggleOffComponent } from './toggle/toggle.off.component';
import { ToggleButtonComponent } from './toggle/toggle.button.component';
import { ToggleDirective } from './toggle/toggle.directive';
import { ToggleProviderDirective } from './toggle/toggle-provider.directive';
import { LabelledButtonComponent } from './labelled-button.component';
import { LabelledStateComponent } from './labelled-state.component';
import { FsmComponent } from './fsm/fsm.component';

@NgModule({
  declarations: [
    AdvPatternsComponent,
    SwitchComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleDirective,
    ToggleProviderDirective,
    LabelledButtonComponent,
    LabelledStateComponent,
    FsmComponent
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
