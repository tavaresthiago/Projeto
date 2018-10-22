import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../../router.animations";
import { Curso } from "../../../services/curso/curso";
import { CursoService } from "../../../services/curso/curso.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Response } from "../../../services/response";

@Component({
    selector: 'app-cadastra-curso',
    templateUrl: './cadastra-ata-reuniao.component.html',
    styleUrls: ['./cadastra-ata-reuniao.component.scss'],
    animations: [routerTransition()]
})
export class CadastraCursoComponent implements OnInit {

    public titulo:string;
    private curso:Curso = new Curso();

    constructor(private cursoService:CursoService, private router:Router, private activatedRoute:ActivatedRoute) {}
    /**Carregado na inicialização do componente*/
    ngOnInit() {
      this.activatedRoute.params.subscribe(parametro => {
        if(parametro["id"] == undefined){
          this.titulo = "Cadastro de Curso";
        }else{
          this.titulo = "Editar Curso";
          this.cursoService.getCurso(Number(parametro["id"])).subscribe(res => this.curso = res);
        }
      })
    }

    /**FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    cadastrar():void {

      /**SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      if(this.curso.id == undefined){

        /**CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
        this.cursoService.addCurso(this.curso).subscribe(response => {

            /**PEGA O RESPONSE DO RETORNO DO SERVIÇO*/
            let res:Response = <Response>response;

            /**SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
            E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
            if(res.id == 1){
              alert(res.mensagem);
              this.curso = new Curso();
            }
            else{
              /**
              ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
              NO SERVIDOR (CODIGO = 0)*/
              alert(res.mensagem);
            }
          },
          (erro) => {
            /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
            alert(erro);
          });

      }
      else{

        /**AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
        this.cursoService.atualizarCurso(this.curso).subscribe(response => {

            /**PEGA O RESPONSE DO RETORNO DO SERVIÇO*/
            let res:Response = <Response>response;

            /**SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
              E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
            if(res.id == 1){
              alert(res.mensagem);
              this.router.navigate(['/consulta-pessoa']);
            }
            else{
              /**ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
              NO SERVIDOR (CODIGO = 0)*/
              alert(res.mensagem);
            }
          },
          (erro) => {
            /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
            alert(erro);
          });
      }

    }

}
