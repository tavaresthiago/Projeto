import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ProfessorRoutingModule, PageHeaderModule],
    declarations: [ProfessorComponent]
})
export class ProfessorModule {}
