import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelFlexComponent } from './cancel-flex.component';

describe('CancelFlexComponent', () => {
  let component: CancelFlexComponent;
  let fixture: ComponentFixture<CancelFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
