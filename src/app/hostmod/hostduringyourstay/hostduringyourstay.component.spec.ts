import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostduringyourstayComponent } from './hostduringyourstay.component';

describe('HostduringyourstayComponent', () => {
  let component: HostduringyourstayComponent;
  let fixture: ComponentFixture<HostduringyourstayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostduringyourstayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostduringyourstayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
