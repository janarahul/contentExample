import { Directive, OnChanges, SimpleChanges, Input, Optional, Host } from '@angular/core';
import { ToggleDirective } from './toggle.directive';

@Directive({
  exportAs: 'toggleProvider',
  selector: 'toggle, [toggle],[toggleProvider]',
})
export class ToggleProviderDirective implements OnChanges {

  constructor(@Host() @Optional() private toggleDirective: ToggleDirective ) { }
  
  @Input()
  toggleProvider: ToggleDirective;

  toggle: ToggleDirective = this.toggleDirective;

  ngOnChanges(changes: SimpleChanges): void {
    const { toggleProvider } = changes;
    if (toggleProvider) {
      this.toggle = this.toggleProvider || this.toggleDirective;
    }
  }


}
