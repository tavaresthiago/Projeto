import { EditaPpcModule } from './edita-ppc.module';

describe('EditaCursoModule', () => {
    let editaPpcModule: EditaPpcModule;

    beforeEach(() => {
      editaPpcModule = new EditaPpcModule();
    });

    it('should create an instance', () => {
        expect(editaPpcModule).toBeTruthy();
    });
});
