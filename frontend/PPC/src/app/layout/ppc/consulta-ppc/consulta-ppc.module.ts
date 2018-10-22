import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ConsultaPpcRoutingModule } from './consulta-ppc-routing.module';
import { ConsultaPpcComponent } from './consulta-ppc.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, ConsultaPpcRoutingModule, PageHeaderModule],
    declarations: [ConsultaPpcComponent]
})
export class ConsultaPpcModule {}
