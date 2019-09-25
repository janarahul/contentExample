import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToggleProviderDirective } from './toggle-provider.directive';

@Component({
  selector: 'toggle-button',
  template: '<switch [on]="toggleProvider.toggle?.on" (click)="onClick()" ></switch>',
})
export class ToggleButtonComponent  {
//   @Input() on: boolean;
//   @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  onClick() {
    this.toggleProvider.toggle.setOnState(!this.toggleProvider.toggle.on);
  }
  constructor(public toggleProvider: ToggleProviderDirective){
      
  }
}
