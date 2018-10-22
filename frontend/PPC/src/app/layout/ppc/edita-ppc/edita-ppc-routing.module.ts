import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditaPpcComponent } from './edita-ppc.component';

const routes: Routes = [
    {
        path: '',
        component: EditaPpcComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditaPpcRoutingModule {}
