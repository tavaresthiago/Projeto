import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { EditaCursoRoutingModule } from './edita-ata-reuniao-routing.module';
import { EditaCursoComponent } from './edita-ata-reuniao.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, EditaCursoRoutingModule, PageHeaderModule],
    declarations: [EditaCursoComponent]
})
export class EditaCursoModule {}
