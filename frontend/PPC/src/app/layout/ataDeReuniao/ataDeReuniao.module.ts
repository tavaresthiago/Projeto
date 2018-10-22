import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtaDeReuniaoRoutingModule } from './ataDeReuniao-routing.module';
import { AtaDeReuniaoComponent } from './ataDeReuniao.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AtaDeReuniaoRoutingModule, PageHeaderModule],
    declarations: [AtaDeReuniaoComponent]
})
export class AtaDeReuniaoModule {}
