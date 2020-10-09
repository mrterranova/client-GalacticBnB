import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MptsComponentComponent } from './mpts-component.component';

describe('MptsComponentComponent', () => {
  let component: MptsComponentComponent;
  let fixture: ComponentFixture<MptsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MptsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MptsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
