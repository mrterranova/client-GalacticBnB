import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSafetyComponent } from './health&safety.component';

describe('HostsliceComponent', () => {
  let component: HealthSafetyComponent;
  let fixture: ComponentFixture<HealthSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
