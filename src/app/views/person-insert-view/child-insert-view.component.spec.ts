import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInsertViewComponent } from './child-insert-view.component';

describe('PersonInsertViewComponent', () => {
  let component: PersonInsertViewComponent;
  let fixture: ComponentFixture<PersonInsertViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInsertViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInsertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
