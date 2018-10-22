import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaPlanoDeEnsinoComponent } from './consulta-plano-ensino.component';

const routes: Routes = [
    {
        path: '',
        component: ConsultaPlanoDeEnsinoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultaPlanoDeEnsinoRoutingModule {}
