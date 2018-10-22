import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvaliacaoCursoComponent } from './avaliacaoCurso.component';

const routes: Routes = [
    {
        path: '',
        component: AvaliacaoCursoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AvaliacaoCursoRoutingModule {}
