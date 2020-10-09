import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostheaderComponent } from './hostheader.component';

describe('HostheaderComponent', () => {
  let component: HostheaderComponent;
  let fixture: ComponentFixture<HostheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
