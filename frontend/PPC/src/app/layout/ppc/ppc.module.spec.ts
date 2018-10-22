import { PpcModule } from './ppc.module';

describe('TablesModule', () => {
  let ppcModule: PpcModule;

  beforeEach(() => {
    ppcModule = new PpcModule();
  });

  it('should create an instance', () => {
    expect(ppcModule).toBeTruthy();
  });
});
