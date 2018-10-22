import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronogramaAtividadesRoutingModule } from './cronogramaAtividades-routing.module';
import { CronogramaAtividadesComponent } from './cronogramaAtividades.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, CronogramaAtividadesRoutingModule, PageHeaderModule],
    declarations: [CronogramaAtividadesComponent]
})
export class CronogramaAtividadesModule {}
