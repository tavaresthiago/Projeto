import { EditaCursoModule } from './edita-plano-ensino.module';

describe('EditaCursoModule', () => {
    let editaCursoModule: EditaCursoModule;

    beforeEach(() => {
      editaCursoModule = new EditaCursoModule();
    });

    it('should create an instance', () => {
        expect(editaCursoModule).toBeTruthy();
    });
});
