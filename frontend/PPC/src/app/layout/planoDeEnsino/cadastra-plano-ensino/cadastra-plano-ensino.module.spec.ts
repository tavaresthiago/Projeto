import { CadastraPlanoDeEnsinoModule } from './cadastra-plano-ensino.module';

describe('CadastraPlanoDeEnsinoModule', () => {
    let cadastraPlanoDeEnsinoModule: CadastraPlanoDeEnsinoModule;

    beforeEach(() => {
      cadastraPlanoDeEnsinoModule = new CadastraPlanoDeEnsinoModule();
    });

    it('should create an instance', () => {
        expect(cadastraPlanoDeEnsinoModule).toBeTruthy();
    });
});
