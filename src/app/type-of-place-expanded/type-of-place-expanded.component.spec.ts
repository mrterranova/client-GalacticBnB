import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfPlaceExpandedComponent } from './type-of-place-expanded.component';

describe('TypeOfPlaceExpandedComponent', () => {
  let component: TypeOfPlaceExpandedComponent;
  let fixture: ComponentFixture<TypeOfPlaceExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfPlaceExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfPlaceExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
