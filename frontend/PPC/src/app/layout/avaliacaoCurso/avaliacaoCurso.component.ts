import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-avaliacaoCurso',
    templateUrl: './avaliacaoCurso.component.html',
    styleUrls: ['./avaliacaoCurso.component.scss'],
    animations: [routerTransition()]
})
export class AvaliacaoCursoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
