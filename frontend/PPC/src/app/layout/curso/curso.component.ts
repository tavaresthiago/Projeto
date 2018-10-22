import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-curso',
    templateUrl: './curso.component.html',
    styleUrls: ['./curso.component.scss'],
    animations: [routerTransition()]
})
export class CursoComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
}
