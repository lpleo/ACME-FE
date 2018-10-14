import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInsertViewComponent } from './parent-insert-view.component';

describe('ParentInsertComponent', () => {
  let component: ParentInsertViewComponent;
  let fixture: ComponentFixture<ParentInsertViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentInsertViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInsertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
