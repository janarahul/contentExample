import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adv-patterns',
  templateUrl: './adv-patterns.component.html',
  styleUrls: ['./adv-patterns.component.scss']
})
export class AdvPatternsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMessage(value) {
    console.log(value);
  }
}
