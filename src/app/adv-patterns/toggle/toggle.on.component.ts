import { Component, Input } from '@angular/core';
import { ToggleProviderDirective } from './toggle-provider.directive';

@Component({
  selector: 'toggle-on',
  template: '<ng-content *ngIf="toggleProvider.toggle?.on"></ng-content>',
})
export class ToggleOnComponent  {
  constructor(public toggleProvider: ToggleProviderDirective){
      
  }
}
