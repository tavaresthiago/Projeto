import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraPlanoDeEnsinoComponent } from './cadastra-plano-ensino.component';

const routes: Routes = [
    {
        path: '',
        component: CadastraPlanoDeEnsinoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastraPlanoDeEnsinoRoutingModule {}
