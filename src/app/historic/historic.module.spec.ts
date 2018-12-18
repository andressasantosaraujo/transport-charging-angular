import { HistoricModule } from './historic.module';

describe('HistoricModule', () => {
  let historicModule: HistoricModule;

  beforeEach(() => {
    historicModule = new HistoricModule();
  });

  it('should create an instance', () => {
    expect(historicModule).toBeTruthy();
  });
});
