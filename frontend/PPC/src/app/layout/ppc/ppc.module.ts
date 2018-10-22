import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpcRoutingModule } from './ppc-routing.module';
import { PpcComponent } from './ppc.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, PpcRoutingModule, PageHeaderModule],
    declarations: [PpcComponent]
})
export class PpcModule {}
