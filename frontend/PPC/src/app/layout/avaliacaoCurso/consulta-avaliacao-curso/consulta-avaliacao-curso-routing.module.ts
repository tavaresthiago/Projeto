import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaCursoComponent } from './consulta-avaliacao-curso.component';

const routes: Routes = [
    {
        path: '',
        component: ConsultaCursoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultaCursoRoutingModule {}
