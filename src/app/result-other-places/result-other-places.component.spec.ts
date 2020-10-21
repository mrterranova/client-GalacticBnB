import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOtherPlacesComponent } from './result-other-places.component';

describe('ResultOtherPlacesComponent', () => {
  let component: ResultOtherPlacesComponent;
  let fixture: ComponentFixture<ResultOtherPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultOtherPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultOtherPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
