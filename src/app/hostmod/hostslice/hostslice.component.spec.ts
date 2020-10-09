import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsliceComponent } from './hostslice.component';

describe('HostsliceComponent', () => {
  let component: HostsliceComponent;
  let fixture: ComponentFixture<HostsliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
