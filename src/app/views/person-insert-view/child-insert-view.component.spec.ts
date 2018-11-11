import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildInsertViewComponent } from './child-insert-view.component';

describe('ChildInsertViewComponent', () => {
  let component: ChildInsertViewComponent;
  let fixture: ComponentFixture<ChildInsertViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildInsertViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInsertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
