import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofPlaceComponent } from './type-of-place.component';

describe('TypeofPlaceComponent', () => {
  let component: TypeofPlaceComponent;
  let fixture: ComponentFixture<TypeofPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeofPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});