import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'prefix' },
            { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule' },
            { path: 'curso', loadChildren: './curso/curso.module#CursoModule' },
            { path: 'ppc', loadChildren: './ppc/ppc.module#PpcModule' },
            { path: 'professor', loadChildren: './professor/professor.module#ProfessorModule' },
            { path: 'disciplina', loadChildren: './disciplina/disciplina.module#DisciplinaModule' },
            { path: 'planoDeEnsino', loadChildren: './planoDeEnsino/planoDeEnsino.module#PlanoDeEnsinoModule' },
            { path: 'cronogramaAtividades', loadChildren: './cronogramaAtividades/cronogramaAtividades.module#CronogramaAtividadesModule' },
            { path: 'bibliografia', loadChildren: './bibliografia/bibliografia.module#BibliografiaModule' },
            { path: 'ataDeReuniao', loadChildren: './ataDeReuniao/ataDeReuniao.module#AtaDeReuniaoModule' },
            { path: 'avaliacaoCurso', loadChildren: './avaliacaoCurso/avaliacaoCurso.module#AvaliacaoCursoModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'cadastra-curso', loadChildren: './curso/cadastra-curso/cadastra-curso.module#CadastraCursoModule' },
            { path: 'consulta-curso', loadChildren: './curso/consulta-curso/consulta-curso.module#ConsultaCursoModule' },
            { path: 'edita-curso', loadChildren: './curso/edita-curso/edita-curso.module#EditaCursoModule' },
            { path: 'cadastra-ppc', loadChildren: './ppc/cadastra-ppc/cadastra-ppc.module#CadastraPpcModule' },
            { path: 'consulta-ppc', loadChildren: './ppc/consulta-ppc/consulta-ppc.module#ConsultaPpcModule' },
            { path: 'edita-ppc', loadChildren: './ppc/edita-ppc/edita-ppc.module#EditaPpcModule' },
            { path: 'cadastra-professor', loadChildren: './professor/cadastra-professor/cadastra-professor.module#CadastraProfessorModule' },
            { path: 'consulta-professor', loadChildren: './professor/consulta-professor/consulta-professor.module#ConsultaProfessorModule' },
            { path: 'edita-professor', loadChildren: './professor/edita-professor/edita-professor.module#EditaProfessorModule' },
            { path: 'cadastra-plano-ensino', loadChildren: './planoDeEnsino/cadastra-plano-ensino/cadastra-plano-ensino.module#CadastraPlanoDeEnsinoModule' },
            { path: 'consulta-plano-ensino', loadChildren: './planoDeEnsino/consulta-plano-ensino/consulta-plano-ensino.module#ConsultaPlanoDeEnsinoModule' },
            { path: 'edita-plano-ensino', loadChildren: './planoDeEnsino/edita-plano-ensino/edita-plano-ensino.module#EditaPlanoDeEnsinoModule' }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
