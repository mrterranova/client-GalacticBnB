import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrianTtdComponent } from './brian-ttd.component';

describe('BrianTtdComponent', () => {
  let component: BrianTtdComponent;
  let fixture: ComponentFixture<BrianTtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrianTtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrianTtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it should but it isn't so skip ya now learn ya later
});



