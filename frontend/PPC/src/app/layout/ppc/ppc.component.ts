import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-ppc',
    templateUrl: './ppc.component.html',
    styleUrls: ['./ppc.component.scss'],
    animations: [routerTransition()]
})
export class PpcComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
