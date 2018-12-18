import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportChargingComponent } from './transport-charging.component';

describe('TransportChargingComponent', () => {
  let component: TransportChargingComponent;
  let fixture: ComponentFixture<TransportChargingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportChargingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
