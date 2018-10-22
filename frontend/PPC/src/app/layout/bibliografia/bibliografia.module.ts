import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { BibliografiaRoutingModule } from './bibliografia-routing.module';
import { BibliografiaComponent } from './bibliografia.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, BibliografiaRoutingModule, PageHeaderModule],
    declarations: [BibliografiaComponent]
})
export class BibliografiaModule {}
