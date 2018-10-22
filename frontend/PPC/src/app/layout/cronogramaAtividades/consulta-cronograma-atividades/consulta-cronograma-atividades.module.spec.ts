import { ConsultaCursoModule } from './consulta-cronograma-atividades.module';

describe('ConsultaCursoModule', () => {
    let consultaCursoModule: ConsultaCursoModule;

    beforeEach(() => {
      consultaCursoModule = new ConsultaCursoModule();
    });

    it('should create an instance', () => {
        expect(consultaCursoModule).toBeTruthy();
    });
});
