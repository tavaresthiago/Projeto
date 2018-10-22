import { CadastraCursoModule } from './cadastra-cronograma-atividades.module';

describe('CadastraCursoModule', () => {
    let cadastraCursoModule: CadastraCursoModule;

    beforeEach(() => {
      cadastraCursoModule = new CadastraCursoModule();
    });

    it('should create an instance', () => {
        expect(cadastraCursoModule).toBeTruthy();
    });
});
