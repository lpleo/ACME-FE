import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFieldsComponent } from './child-fields.component';

describe('ChildFieldsComponent', () => {
  let component: ChildFieldsComponent;
  let fixture: ComponentFixture<ChildFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
