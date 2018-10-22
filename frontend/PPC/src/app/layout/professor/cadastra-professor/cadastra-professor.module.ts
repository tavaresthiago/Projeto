import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CadastraProfessorRoutingModule } from './cadastra-professor-routing.module';
import { CadastraProfessorComponent } from './cadastra-professor.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, CadastraProfessorRoutingModule, PageHeaderModule],
    declarations: [CadastraProfessorComponent]
})
export class CadastraProfessorModule {}
