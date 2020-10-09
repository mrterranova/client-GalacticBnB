import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TtkContainerComponent } from './ttkcontainer.component';

describe('TtkContainerComponent', () => {
  let component: TtkContainerComponent;
  let fixture: ComponentFixture<TtkContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtkContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
