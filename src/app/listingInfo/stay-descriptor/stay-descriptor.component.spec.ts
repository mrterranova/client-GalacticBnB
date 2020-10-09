import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayDescriptorComponent } from './stay-descriptor.component';

describe('StayDescriptorComponent', () => {
  let component: StayDescriptorComponent;
  let fixture: ComponentFixture<StayDescriptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayDescriptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayDescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
