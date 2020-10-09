import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioBlurbInfoComponent } from './bio-blurb-info.component';

describe('BioBlurbInfoComponent', () => {
  let component: BioBlurbInfoComponent;
  let fixture: ComponentFixture<BioBlurbInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioBlurbInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioBlurbInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
