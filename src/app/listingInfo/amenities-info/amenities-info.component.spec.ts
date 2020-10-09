import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitiesInfoComponent } from './amenities-info.component';

describe('AmenitiesInfoComponent', () => {
  let component: AmenitiesInfoComponent;
  let fixture: ComponentFixture<AmenitiesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenitiesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenitiesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
