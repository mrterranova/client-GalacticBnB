import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostcohostComponent } from './hostcohost.component';

describe('HostcohostComponent', () => {
  let component: HostcohostComponent;
  let fixture: ComponentFixture<HostcohostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostcohostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostcohostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
