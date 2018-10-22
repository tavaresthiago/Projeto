import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { EditaPpcRoutingModule } from './edita-ppc-routing.module';
import { EditaPpcComponent } from './edita-ppc.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, EditaPpcRoutingModule, PageHeaderModule],
    declarations: [EditaPpcComponent]
})
export class EditaPpcModule {}
