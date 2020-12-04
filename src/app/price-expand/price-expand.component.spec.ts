import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceExpandComponent } from './price-expand.component';

describe('PriceExpandComponent', () => {
  let component: PriceExpandComponent;
  let fixture: ComponentFixture<PriceExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
