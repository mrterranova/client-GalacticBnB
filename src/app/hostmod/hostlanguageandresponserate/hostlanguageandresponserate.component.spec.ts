import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlanguageandresponserateComponent } from './hostlanguageandresponserate.component';

describe('HostlanguageandresponserateComponent', () => {
  let component: HostlanguageandresponserateComponent;
  let fixture: ComponentFixture<HostlanguageandresponserateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlanguageandresponserateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlanguageandresponserateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
