import { ConsultaPpcModule } from './consulta-ppc.module';

describe('ConsultaPpcModule', () => {
    let consultaPpcModule: ConsultaPpcModule;

    beforeEach(() => {
      consultaPpcModule = new ConsultaPpcModule();
    });

    it('should create an instance', () => {
        expect(consultaPpcModule).toBeTruthy();
    });
});
