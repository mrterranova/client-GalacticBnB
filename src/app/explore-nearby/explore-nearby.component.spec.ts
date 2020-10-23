import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreNearbyComponent } from './explore-nearby.component';

describe('ExploreNearbyComponent', () => {
  let component: ExploreNearbyComponent;
  let fixture: ComponentFixture<ExploreNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
