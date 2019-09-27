import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { Cat } from '../cat';
import { NgForOfContext } from '@angular/common';

@Component({
  selector: 'cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
  @Input() cats: Cat[];
  
  @ContentChild(TemplateRef, {static: true}) catTemplateRef: TemplateRef<NgForOfContext<Cat>>; 
  constructor() { }
  
  ngOnInit() {
  }

}
