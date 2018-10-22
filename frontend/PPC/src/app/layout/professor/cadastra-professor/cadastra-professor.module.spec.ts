import { CadastraProfessorModule } from './cadastra-professor.module';

describe('CadastraProfessorModule', () => {
    let cadastraProfessorModule: CadastraProfessorModule;

    beforeEach(() => {
      cadastraProfessorModule = new CadastraProfessorModule();
    });

    it('should create an instance', () => {
        expect(cadastraProfessorModule).toBeTruthy();
    });
});
