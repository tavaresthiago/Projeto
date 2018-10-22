import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PpcComponent } from './ppc.component';

const routes: Routes = [
    {
        path: '', component: PpcComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PpcRoutingModule {
}
