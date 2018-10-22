import { BibliografiaModule } from './bibliografia.module';

describe('ChartsModule', () => {
    let bibliografiaModule: BibliografiaModule;

    beforeEach(() => {
      bibliografiaModule = new BibliografiaModule();
    });

    it('should create an instance', () => {
        expect(bibliografiaModule).toBeTruthy();
    });
});
