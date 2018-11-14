package br.iesb.sistemappc.controller;

import br.iesb.sistemappc.model.PlanoDeEnsino;
import br.iesb.sistemappc.model.Response;
import br.iesb.sistemappc.repository.PlanoDeEnsinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/service"})
public class PlanoDeEnsinoController {
    @Autowired
    private PlanoDeEnsinoRepository planoDeEnsinoRepository;

    /**
     * Cadastra um novo plano de ensino
     * @param planoDeEnsino
     * @return
     */
    @RequestMapping(value="/planoDeEnsino", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Response cadastrar(PlanoDeEnsino planoDeEnsino){
        try {
            this.planoDeEnsinoRepository.create(planoDeEnsino);
            return new Response(1, "Registro cadastrado com sucesso!");
        }catch (Exception e) {
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Atualiza os dados do plano de ensino
     * @param planoDeEnsino
     * @return
     */
    @RequestMapping(value = "/planoDeEnsino", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response atualizar(PlanoDeEnsino planoDeEnsino){
        try {
            this.planoDeEnsinoRepository.update(planoDeEnsino);
            return new Response(1, "Registro atualizado com sucesso!");
        }catch (Exception e){
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Consulta todos os planos de ensino cadastrados
     * @return
     */
    @RequestMapping(value="/planoDeEnsino", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    List<PlanoDeEnsino> consultar(){

        return this.planoDeEnsinoRepository.findAll();
    }

    /**
     * Busca um plano de ensino por paramentro
     * @param id
     * @return
     */
    @RequestMapping(value="/planoDeEnsino/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody PlanoDeEnsino buscar(@PathVariable("id") Integer id){

        return this.planoDeEnsinoRepository.findById(id);
    }

    /***
     * Exclui um plano de ensino por parametro
     * @param id
     * @return
     */
    @RequestMapping(value="/planoDeEnsino/{id}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response excluir(@PathVariable("id") Integer id){

        PlanoDeEnsino planoDeEnsino = planoDeEnsinoRepository.findById(id);

        try {

            planoDeEnsinoRepository.delete(planoDeEnsino);

            return new Response(1, "Registro excluido com sucesso!");

        }catch(Exception e) {
            return new Response(0, e.getMessage());
        }
    }
}
