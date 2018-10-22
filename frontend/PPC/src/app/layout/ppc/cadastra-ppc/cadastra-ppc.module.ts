import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CadastraPpcRoutingModule } from './cadastra-ppc-routing.module';
import { CadastraPpcComponent } from './cadastra-ppc.component';
import { PageHeaderModule } from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, Ng2Charts, CadastraPpcRoutingModule, PageHeaderModule],
    declarations: [CadastraPpcComponent]
})
export class CadastraPpcModule {}
