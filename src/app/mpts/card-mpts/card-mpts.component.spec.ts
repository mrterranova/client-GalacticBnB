import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMptsComponent } from './card-mpts.component';

describe('CardMptsComponent', () => {
  let component: CardMptsComponent;
  let fixture: ComponentFixture<CardMptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
