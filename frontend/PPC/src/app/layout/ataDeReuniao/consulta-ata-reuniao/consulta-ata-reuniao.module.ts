import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ConsultaCursoRoutingModule } from './consulta-ata-reuniao-routing.module';
import { ConsultaCursoComponent } from './consulta-ata-reuniao.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, ConsultaCursoRoutingModule, PageHeaderModule],
    declarations: [ConsultaCursoComponent]
})
export class ConsultaCursoModule {}
