import { ConsultaDisciplinaModule } from './consulta-disciplina.module';

describe('ConsultaCursoModule', () => {
    let consultaDisciplinaModule: ConsultaDisciplinaModule;

    beforeEach(() => {
      consultaDisciplinaModule = new ConsultaDisciplinaModule();
    });

    it('should create an instance', () => {
        expect(consultaDisciplinaModule).toBeTruthy();
    });
});
