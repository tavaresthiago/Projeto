import { InicioModule } from './inicio.module';

describe('DashboardModule', () => {
  let inicioModule: InicioModule;

  beforeEach(() => {
    inicioModule = new InicioModule();
  });

  it('should create an instance', () => {
    expect(inicioModule).toBeTruthy();
  });
});
