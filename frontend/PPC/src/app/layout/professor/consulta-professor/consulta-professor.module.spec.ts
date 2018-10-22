import { ConsultaProfessorModule } from './consulta-professor.module';

describe('ConsultaProfessorModule', () => {
    let consultaProfessorModule: ConsultaProfessorModule;

    beforeEach(() => {
      consultaProfessorModule = new ConsultaProfessorModule();
    });

    it('should create an instance', () => {
        expect(consultaProfessorModule).toBeTruthy();
    });
});
