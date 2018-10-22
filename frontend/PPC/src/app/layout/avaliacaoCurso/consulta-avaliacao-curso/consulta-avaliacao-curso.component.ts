import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../../router.animations";
import { Curso } from "../../../services/curso/curso";
import { CursoService } from "../../../services/curso/curso.service";
import { Router } from "@angular/router";
import { Response } from "../../../services/response";
import { CURSOS } from "./mock-curso";

@Component({
    selector: 'app-consulta-curso',
    templateUrl: './consulta-avaliacao-curso.component.html',
    styleUrls: ['./consulta-avaliacao-curso.component.scss'],
    animations: [routerTransition()]
})
export class ConsultaCursoComponent implements OnInit {

    // public cursos:Curso[] = new Array();
    cursos = CURSOS;

    public titulo:string;

    constructor(private cursoService:CursoService, private router:Router) {}

    ngOnInit() {
      /**SETA O TÍTULO */
      this.titulo = "Cursos Cadastrados";

      /**CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.cursoService.getCursos().subscribe(res => this.cursos = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(id:number, index:number):void {

      if(confirm("Deseja realmente excluir esse registro?")){

        /**CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.cursoService.excluirCurso(id).subscribe(response => {

            /**PEGA O RESPONSE DO SERVIÇO */
            let res:Response = <Response>response;

            /**1 = SUCESSO
            MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
            O REGISTRO DA TABELA HTML*/
            if(res.id == 1){
              alert(res.mensagem);
              this.cursos.splice(index,1);
            }
            else{
              /**0 = EXCEPTION GERADA NO SERVIÇO JAVA */
              alert(res.mensagem);
            }
          },
          (erro) => {
            /**MOSTRA ERROS NÃO TRATADOS */
            alert(erro);
          });
      }

    }

    editar(id:number):void{

      this.router.navigate(['/edita-curso',/*id*/]);

    }
}
