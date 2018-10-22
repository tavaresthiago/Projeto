import { AtaDeReuniaoModule } from './ataDeReuniao.module';

describe('BsElementModule', () => {
    let ataDeReuniaoModule: AtaDeReuniaoModule;

    beforeEach(() => {
      ataDeReuniaoModule = new AtaDeReuniaoModule();
    });

    it('should create an instance', () => {
        expect(ataDeReuniaoModule).toBeTruthy();
    });
});
