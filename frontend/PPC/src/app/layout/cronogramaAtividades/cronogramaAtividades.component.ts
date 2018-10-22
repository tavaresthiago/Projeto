import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-cronogramaAtividades',
    templateUrl: './cronogramaAtividades.component.html',
    styleUrls: ['./cronogramaAtividades.component.scss'],
    animations: [routerTransition()]
})
export class CronogramaAtividadesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
