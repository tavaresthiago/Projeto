import { DisciplinaModule } from './disciplina.module';

describe('BsElementModule', () => {
    let disciplinaModule: DisciplinaModule;

    beforeEach(() => {
      disciplinaModule = new DisciplinaModule();
    });

    it('should create an instance', () => {
        expect(disciplinaModule).toBeTruthy();
    });
});
