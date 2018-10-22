import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraCursoComponent } from './cadastra-ata-reuniao.component';

const routes: Routes = [
    {
        path: '',
        component: CadastraCursoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastraCursoRoutingModule {}
