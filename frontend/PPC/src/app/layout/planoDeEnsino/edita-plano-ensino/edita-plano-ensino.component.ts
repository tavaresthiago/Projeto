import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../../router.animations";


@Component({
    selector: 'app-consulta-curso',
    templateUrl: './edita-plano-ensino.component.html',
    styleUrls: ['./edita-plano-ensino.component.scss'],
    animations: [routerTransition()]
})
export class EditaCursoComponent implements OnInit {

    public titulo:string;

    constructor() {}

    ngOnInit() {
      this.titulo = "Edita Curso"
    }


}
