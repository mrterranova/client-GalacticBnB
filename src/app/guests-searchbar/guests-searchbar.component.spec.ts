import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsSearchbarComponent } from './guests-searchbar.component';

describe('GuestsSearchbarComponent', () => {
  let component: GuestsSearchbarComponent;
  let fixture: ComponentFixture<GuestsSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
