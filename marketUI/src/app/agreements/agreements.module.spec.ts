import { AgreementsModule } from './agreements.module';

describe('AgreementsModule', () => {
  let agreementsModule: AgreementsModule;

  beforeEach(() => {
    agreementsModule = new AgreementsModule();
  });

  it('should create an instance', () => {
    expect(agreementsModule).toBeTruthy();
  });
});
