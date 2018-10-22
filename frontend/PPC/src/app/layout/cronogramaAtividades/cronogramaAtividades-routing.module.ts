import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CronogramaAtividadesComponent } from './cronogramaAtividades.component';

const routes: Routes = [
    {
        path: '',
        component: CronogramaAtividadesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CronogramaAtividadesRoutingModule {}
