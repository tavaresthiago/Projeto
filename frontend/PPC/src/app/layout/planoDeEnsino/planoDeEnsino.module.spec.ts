import { PlanoDeEnsinoModule } from './planoDeEnsino.module';

describe('GridModule', () => {
  let planoDeEnsinoModule: PlanoDeEnsinoModule;

  beforeEach(() => {
    planoDeEnsinoModule = new PlanoDeEnsinoModule();
  });

  it('should create an instance', () => {
    expect(planoDeEnsinoModule).toBeTruthy();
  });
});
