import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ConsultaProfessorRoutingModule } from './consulta-professor-routing.module';
import { ConsultaProfessorComponent } from './consulta-professor.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, ConsultaProfessorRoutingModule, PageHeaderModule],
    declarations: [ConsultaProfessorComponent]
})
export class ConsultaProfessorModule {}
