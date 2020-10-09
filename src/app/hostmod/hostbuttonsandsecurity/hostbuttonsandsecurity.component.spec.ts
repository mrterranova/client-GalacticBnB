import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostbuttonsandsecurityComponent } from './hostbuttonsandsecurity.component';

describe('HostbuttonsandsecurityComponent', () => {
  let component: HostbuttonsandsecurityComponent;
  let fixture: ComponentFixture<HostbuttonsandsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostbuttonsandsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostbuttonsandsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
