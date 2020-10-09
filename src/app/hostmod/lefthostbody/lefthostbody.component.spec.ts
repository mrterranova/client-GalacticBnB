import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LefthostbodyComponent } from './lefthostbody.component';

describe('LefthostbodyComponent', () => {
  let component: LefthostbodyComponent;
  let fixture: ComponentFixture<LefthostbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LefthostbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LefthostbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
