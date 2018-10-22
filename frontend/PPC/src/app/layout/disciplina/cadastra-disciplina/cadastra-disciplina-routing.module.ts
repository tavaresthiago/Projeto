import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraDisciplinaComponent } from './cadastra-disciplina.component';

const routes: Routes = [
    {
        path: '',
        component: CadastraDisciplinaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastraDisciplinaRoutingModule {}
