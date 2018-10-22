import { CadastraPpcModule } from './cadastra-ppc.module';

describe('CadastraPpcModule', () => {
    let cadastraPpcModule: CadastraPpcModule;

    beforeEach(() => {
      cadastraPpcModule = new CadastraPpcModule();
    });

    it('should create an instance', () => {
        expect(cadastraPpcModule).toBeTruthy();
    });
});
