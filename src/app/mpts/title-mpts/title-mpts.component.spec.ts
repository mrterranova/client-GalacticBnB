import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleMptsComponent } from './title-mpts.component';

describe('TitleMptsComponent', () => {
  let component: TitleMptsComponent;
  let fixture: ComponentFixture<TitleMptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleMptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleMptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
