import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-planoDeEnsino',
    templateUrl: './planoDeEnsino.component.html',
    styleUrls: ['./planoDeEnsino.component.scss'],
    animations: [routerTransition()]
})
export class PlanoDeEnsinoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
