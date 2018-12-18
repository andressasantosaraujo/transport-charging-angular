import { TravelRequestModule } from './travel-request.module';

describe('TravelRequestModule', () => {
  let travelRequestModule: TravelRequestModule;

  beforeEach(() => {
    travelRequestModule = new TravelRequestModule();
  });

  it('should create an instance', () => {
    expect(travelRequestModule).toBeTruthy();
  });
});
