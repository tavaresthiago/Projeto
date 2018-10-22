import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtaDeReuniaoComponent } from './ataDeReuniao.component';

const routes: Routes = [
    {
        path: '',
        component: AtaDeReuniaoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtaDeReuniaoRoutingModule {}
