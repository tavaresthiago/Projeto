import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ConsultaPlanoDeEnsinoRoutingModule } from './consulta-plano-ensino-routing.module';
import { ConsultaPlanoDeEnsinoComponent } from './consulta-plano-ensino.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, ConsultaPlanoDeEnsinoRoutingModule, PageHeaderModule],
    declarations: [ConsultaPlanoDeEnsinoComponent]
})
export class ConsultaPlanoDeEnsinoModule {}
