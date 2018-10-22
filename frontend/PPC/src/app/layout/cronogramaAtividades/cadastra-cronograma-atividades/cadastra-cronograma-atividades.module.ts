import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CadastraCursoRoutingModule } from './cadastra-cronograma-atividades-routing.module';
import { CadastraCursoComponent } from './cadastra-cronograma-atividades.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, CadastraCursoRoutingModule, PageHeaderModule],
    declarations: [CadastraCursoComponent]
})
export class CadastraCursoModule {}
