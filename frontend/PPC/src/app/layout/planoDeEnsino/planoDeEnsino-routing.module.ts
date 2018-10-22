import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanoDeEnsinoComponent } from './planoDeEnsino.component';

const routes: Routes = [
    {
        path: '', component: PlanoDeEnsinoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanoDeEnsinoRoutingModule { }
