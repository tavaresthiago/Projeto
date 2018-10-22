import { CadastraDisciplinaModule } from './cadastra-disciplina.module';

describe('CadastraDisciplinaModule', () => {
    let cadastraDisciplinaModule: CadastraDisciplinaModule;

    beforeEach(() => {
      cadastraDisciplinaModule = new CadastraDisciplinaModule();
    });

    it('should create an instance', () => {
        expect(cadastraDisciplinaModule).toBeTruthy();
    });
});
