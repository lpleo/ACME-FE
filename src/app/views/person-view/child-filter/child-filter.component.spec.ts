import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFilterComponent } from './child-filter.component';

describe('ChildFilterComponent', () => {
  let component: ChildFilterComponent;
  let fixture: ComponentFixture<ChildFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
