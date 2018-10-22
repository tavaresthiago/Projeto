import { CronogramaAtividadesModule } from './cronogramaAtividades.module';

describe('BsElementModule', () => {
    let cronogramaAtividadesModule: CronogramaAtividadesModule;

    beforeEach(() => {
      cronogramaAtividadesModule = new CronogramaAtividadesModule();
    });

    it('should create an instance', () => {
        expect(cronogramaAtividadesModule).toBeTruthy();
    });
});
