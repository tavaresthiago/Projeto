import { EditaCursoModule } from './edita-avaliacao-curso.module';

describe('EditaCursoModule', () => {
    let editaCursoModule: EditaCursoModule;

    beforeEach(() => {
      editaCursoModule = new EditaCursoModule();
    });

    it('should create an instance', () => {
        expect(editaCursoModule).toBeTruthy();
    });
});
