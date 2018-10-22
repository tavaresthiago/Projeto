import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanoDeEnsinoRoutingModule } from './planoDeEnsino-routing.module';
import { PlanoDeEnsinoComponent } from './planoDeEnsino.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, PlanoDeEnsinoRoutingModule, PageHeaderModule],
    declarations: [PlanoDeEnsinoComponent]
})
export class PlanoDeEnsinoModule {}
