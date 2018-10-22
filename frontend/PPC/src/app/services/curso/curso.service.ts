import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Curso } from "./curso";
import { ConfigService } from "../config.service";

@Injectable()
export class CursoService{
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;

    constructor(private http:Http, private configService:ConfigService) {
      /**Setando a url do serviço rest que vai ser acessado*/
      this.baseUrlService = configService.getUrlService() + '/curso';

      /**Adicionando o json no header*/
      this.headers = new Headers({ 'Contety-type': 'apilication/json;charset=UTF-8' });
      this.options = new RequestOptions({ headers: this.headers });

    }

    /**CONSULTA TODOS OS CURSO CADASTRADOS */
    getCursos(){
      return this.http.get(this.baseUrlService).pipe(map(res => res.json()));
    }

    /**ADICIONA UM NOVO CURSO */
    addCurso(curso: Curso){

      return this.http.post(this.baseUrlService, JSON.stringify(curso),this.options).pipe(map(res => res.json()));
    }
    /**EXCLUI UM CURSO */
    excluirCurso(id:number){

      return this.http.delete(this.baseUrlService + id).pipe(map(res => res.json()));
    }

    /**CONSULTA UM CURSO PELO ID */
    getCurso(id:number){

      return this.http.get(this.baseUrlService + id).pipe(map(res => res.json()));
    }

    /**ATUALIZA INFORMAÇÕES DE CURSO */
    atualizarCurso(curso:Curso){

      return this.http.put(this.baseUrlService, JSON.stringify(curso),this.options).pipe(map(res => res.json()));
    }

}
