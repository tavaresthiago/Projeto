import { CadastraCursoModule } from './cadastra-curso.module';

describe('CadastraCursoModule', () => {
    let cadastraCursoModule: CadastraCursoModule;

    beforeEach(() => {
      cadastraCursoModule = new CadastraCursoModule();
    });

    it('should create an instance', () => {
        expect(cadastraCursoModule).toBeTruthy();
    });
});
