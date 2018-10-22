import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CadastraDisciplinaRoutingModule } from './cadastra-disciplina-routing.module';
import { CadastraDisciplinaComponent } from './cadastra-disciplina.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, CadastraDisciplinaRoutingModule, PageHeaderModule],
    declarations: [CadastraDisciplinaComponent]
})
export class CadastraDisciplinaModule {}
