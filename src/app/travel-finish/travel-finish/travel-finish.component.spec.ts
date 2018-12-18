import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFinishComponent } from './travel-finish.component';

describe('TravelFinishComponent', () => {
  let component: TravelFinishComponent;
  let fixture: ComponentFixture<TravelFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
