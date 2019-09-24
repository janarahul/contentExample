import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvPatternsComponent } from './adv-patterns.component';

describe('AdvPatternsComponent', () => {
  let component: AdvPatternsComponent;
  let fixture: ComponentFixture<AdvPatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvPatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
