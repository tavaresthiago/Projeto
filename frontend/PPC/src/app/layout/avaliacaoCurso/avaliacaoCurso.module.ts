import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaliacaoCursoRoutingModule } from './avaliacaoCurso-routing.module';
import { AvaliacaoCursoComponent } from './avaliacaoCurso.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AvaliacaoCursoRoutingModule, PageHeaderModule],
    declarations: [AvaliacaoCursoComponent]
})
export class AvaliacaoCursoModule {}
