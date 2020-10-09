import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInfoContainerComponent } from './listing-info-container.component';

describe('ListingInfoContainerComponent', () => {
  let component: ListingInfoContainerComponent;
  let fixture: ComponentFixture<ListingInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
