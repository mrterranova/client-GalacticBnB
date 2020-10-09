import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRulesComponent } from './houserules.component';

describe('HostsliceComponent', () => {
  let component: HouseRulesComponent;
  let fixture: ComponentFixture<HouseRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
