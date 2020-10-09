import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsuperhostexplainationComponent } from './hostsuperhostexplaination.component';

describe('HostsuperhostexplainationComponent', () => {
  let component: HostsuperhostexplainationComponent;
  let fixture: ComponentFixture<HostsuperhostexplainationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsuperhostexplainationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsuperhostexplainationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
