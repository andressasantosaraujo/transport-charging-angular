import { TransportChargingModule } from './transport-charging.module';

describe('TransportChargingModule', () => {
  let transportChargingModule: TransportChargingModule;

  beforeEach(() => {
    transportChargingModule = new TransportChargingModule();
  });

  it('should create an instance', () => {
    expect(transportChargingModule).toBeTruthy();
  });
});
