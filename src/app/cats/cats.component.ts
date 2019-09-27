import { Component, OnInit } from '@angular/core';
import { Cat } from './cat';

@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  constructor() { }
  cats: Cat[];
  ngOnInit() {
    this.cats = [
      {name: 'A',img: '',scolor: ''},
      {name: 'B',img: '',scolor: ''},
      {name: 'C',img: '',scolor: ''},
    ]; 
  }

}
