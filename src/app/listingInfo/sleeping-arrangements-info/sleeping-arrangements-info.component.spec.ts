import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepingArrangementsInfoComponent } from './sleeping-arrangements-info.component';

describe('SleepingArrangementsInfoComponent', () => {
  let component: SleepingArrangementsInfoComponent;
  let fixture: ComponentFixture<SleepingArrangementsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepingArrangementsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepingArrangementsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
