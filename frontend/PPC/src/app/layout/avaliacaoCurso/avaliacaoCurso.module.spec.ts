import { AvaliacaoCursoModule } from './avaliacaoCurso.module';

describe('BsElementModule', () => {
    let avaliacaoCursoModule: AvaliacaoCursoModule;

    beforeEach(() => {
      avaliacaoCursoModule = new AvaliacaoCursoModule();
    });

    it('should create an instance', () => {
        expect(avaliacaoCursoModule).toBeTruthy();
    });
});
