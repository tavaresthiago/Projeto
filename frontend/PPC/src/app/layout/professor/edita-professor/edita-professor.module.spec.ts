import { EditaCursoModule } from './edita-professor.module';

describe('EditaCursoModule', () => {
    let editaCursoModule: EditaCursoModule;

    beforeEach(() => {
      editaCursoModule = new EditaCursoModule();
    });

    it('should create an instance', () => {
        expect(editaCursoModule).toBeTruthy();
    });
});
