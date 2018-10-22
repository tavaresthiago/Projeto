import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-ataDeReuniao',
    templateUrl: './ataDeReuniao.component.html',
    styleUrls: ['./ataDeReuniao.component.scss'],
    animations: [routerTransition()]
})
export class AtaDeReuniaoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
