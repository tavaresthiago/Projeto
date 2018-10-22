import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaProfessorComponent } from './consulta-professor.component';

const routes: Routes = [
    {
        path: '',
        component: ConsultaProfessorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultaProfessorRoutingModule {}
