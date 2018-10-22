import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMaskComponent } from './child-mask.component';

describe('ChildMaskComponent', () => {
  let component: ChildMaskComponent;
  let fixture: ComponentFixture<ChildMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
