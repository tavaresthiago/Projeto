import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../../router.animations";


@Component({
    selector: 'app-consulta-curso',
    templateUrl: './edita-ppc.component.html',
    styleUrls: ['./edita-ppc.component.scss'],
    animations: [routerTransition()]
})
export class EditaPpcComponent implements OnInit {

    public titulo:string;

    constructor() {}

    ngOnInit() {
      this.titulo = "Edita PPC"
    }


}
