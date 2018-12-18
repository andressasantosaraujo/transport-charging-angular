import { TravelFinishModule } from './travel-finish.module';

describe('TravelFinishModule', () => {
  let travelFinishModule: TravelFinishModule;

  beforeEach(() => {
    travelFinishModule = new TravelFinishModule();
  });

  it('should create an instance', () => {
    expect(travelFinishModule).toBeTruthy();
  });
});
