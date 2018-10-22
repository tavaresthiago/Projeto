import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-professor',
    templateUrl: './professor.component.html',
    styleUrls: ['./professor.component.scss'],
    animations: [routerTransition()]
})
export class ProfessorComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
