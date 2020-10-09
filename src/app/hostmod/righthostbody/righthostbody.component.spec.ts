import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RighthostbodyComponent } from './righthostbody.component';

describe('RighthostbodyComponent', () => {
  let component: RighthostbodyComponent;
  let fixture: ComponentFixture<RighthostbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RighthostbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RighthostbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
