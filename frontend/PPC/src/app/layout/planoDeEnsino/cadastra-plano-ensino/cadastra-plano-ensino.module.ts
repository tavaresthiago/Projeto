import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CadastraPlanoDeEnsinoRoutingModule } from './cadastra-plano-ensino-routing.module';
import { CadastraPlanoDeEnsinoComponent } from './cadastra-plano-ensino.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, CadastraPlanoDeEnsinoRoutingModule, PageHeaderModule],
    declarations: [CadastraPlanoDeEnsinoComponent]
})
export class CadastraPlanoDeEnsinoModule {}
