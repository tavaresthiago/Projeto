import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, CursoRoutingModule, PageHeaderModule],
    declarations: [CursoComponent]
})
export class CursoModule {}
