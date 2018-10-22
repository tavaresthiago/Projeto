import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaComponent } from './disciplina.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, DisciplinaRoutingModule, PageHeaderModule],
    declarations: [DisciplinaComponent]
})
export class DisciplinaModule {}
