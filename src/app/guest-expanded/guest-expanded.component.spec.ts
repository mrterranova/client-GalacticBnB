import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestExpandedComponent } from './guest-expanded.component';

describe('GuestExpandedComponent', () => {
  let component: GuestExpandedComponent;
  let fixture: ComponentFixture<GuestExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
