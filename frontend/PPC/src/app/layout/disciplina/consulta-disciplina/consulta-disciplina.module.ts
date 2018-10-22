import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ConsultaDisciplinaRoutingModule } from './consulta-disciplina-routing.module';
import { ConsultaDisciplinaComponent } from './consulta-disciplina.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, ConsultaDisciplinaRoutingModule, PageHeaderModule],
    declarations: [ConsultaDisciplinaComponent]
})
export class ConsultaDisciplinaModule {}
