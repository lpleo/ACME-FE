import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSelectorComponent } from './camp-selector.component';

describe('CampSelectorComponent', () => {
  let component: CampSelectorComponent;
  let fixture: ComponentFixture<CampSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CampSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
