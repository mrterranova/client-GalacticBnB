import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosticonsComponent } from './hosticons.component';

describe('HosticonsComponent', () => {
  let component: HosticonsComponent;
  let fixture: ComponentFixture<HosticonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosticonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosticonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
