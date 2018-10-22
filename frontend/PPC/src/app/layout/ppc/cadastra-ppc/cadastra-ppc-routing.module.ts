import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraPpcComponent } from './cadastra-ppc.component';

const routes: Routes = [
    {
        path: '',
        component: CadastraPpcComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastraPpcRoutingModule {}
