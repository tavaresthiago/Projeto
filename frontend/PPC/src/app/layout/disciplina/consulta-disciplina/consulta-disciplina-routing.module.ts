import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaDisciplinaComponent } from './consulta-disciplina.component';

const routes: Routes = [
    {
        path: '',
        component: ConsultaDisciplinaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultaDisciplinaRoutingModule {}
