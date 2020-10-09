import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostbioComponent } from './hostbio.component';

describe('HostbioComponent', () => {
  let component: HostbioComponent;
  let fixture: ComponentFixture<HostbioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostbioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
