import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraProfessorComponent } from './cadastra-professor.component';

const routes: Routes = [
    {
        path: '',
        component: CadastraProfessorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastraProfessorRoutingModule {}
