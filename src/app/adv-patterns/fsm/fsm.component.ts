import { Component, OnInit } from '@angular/core';
import { Machine, interpret } from 'xstate';

@Component({
  selector: 'fsm',
  templateUrl: './fsm.component.html',
  styleUrls: ['./fsm.component.scss']
})
export class FsmComponent implements OnInit {

  constructor() { }

  toggleService;
  toggleMachine;
  currentState;
  ngOnInit() {
    this.toggleMachine = Machine({
      id: 'toggle',
      initial: 'inactive',
      states: {
        inactive: { on:{ TOGGLE: 'active'} },
        active: { on:{ TOGGLE: 'inactive'}}
      }
    });
    this.toggleService = interpret(this.toggleMachine)
      .onTransition(state => this.currentState = (state))
      .start();

  }
  toggleState(){
    this.toggleService.send('TOGGLE');
    console.log(this.toggleMachine.states)
  }

  
}
