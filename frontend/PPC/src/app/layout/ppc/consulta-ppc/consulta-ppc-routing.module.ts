import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaPpcComponent } from './consulta-ppc.component';

const routes: Routes = [
    {
        path: '',
        component: ConsultaPpcComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultaPpcRoutingModule {}
