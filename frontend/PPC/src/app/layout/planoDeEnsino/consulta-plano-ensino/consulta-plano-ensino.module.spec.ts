import { ConsultaPlanoDeEnsinoModule } from './consulta-plano-ensino.module';

describe('ConsultaPlanoDeEnsinoModule', () => {
    let consultaPlanoDeEnsinoModule: ConsultaPlanoDeEnsinoModule;

    beforeEach(() => {
      consultaPlanoDeEnsinoModule = new ConsultaPlanoDeEnsinoModule();
    });

    it('should create an instance', () => {
        expect(consultaPlanoDeEnsinoModule).toBeTruthy();
    });
});
