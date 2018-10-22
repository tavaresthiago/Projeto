import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../../router.animations";


@Component({
    selector: 'app-consulta-curso',
    templateUrl: './edita-disciplina.component.html',
    styleUrls: ['./edita-disciplina.component.scss'],
    animations: [routerTransition()]
})
export class EditaCursoComponent implements OnInit {

    public titulo:string;

    constructor() {}

    ngOnInit() {
      this.titulo = "Edita Curso"
    }


}
