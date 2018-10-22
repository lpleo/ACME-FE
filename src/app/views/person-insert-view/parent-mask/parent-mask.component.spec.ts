import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMaskComponent } from './parent-mask.component';

describe('ParentMaskComponent', () => {
  let component: ParentMaskComponent;
  let fixture: ComponentFixture<ParentMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
