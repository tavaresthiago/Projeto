package br.iesb.sistemappc.controller;

import br.iesb.sistemappc.model.Bibliografia;
import br.iesb.sistemappc.model.Response;
import br.iesb.sistemappc.repository.BibliografiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/service"})
public class BibliografiaController {
    @Autowired
    private BibliografiaRepository bibliografiaRepository;

    /**
     * Cadastra uma nova bibliografia
     * @param bibliografia
     * @return
     */
    @RequestMapping(value="/bibliografia", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Response cadastrar(Bibliografia bibliografia){
        try {
            this.bibliografiaRepository.create(bibliografia);
            return new Response(1, "Registro cadastrado com sucesso!");
        }catch (Exception e) {
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Atualiza os dados de uma bibliografia
     * @param bibliografia
     * @return
     */
    @RequestMapping(value = "/bibliografia", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response atualizar(Bibliografia bibliografia){
        try {
            this.bibliografiaRepository.update(bibliografia);
            return new Response(1, "Registro atualizado com sucesso!");
        }catch (Exception e){
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Consulta todos as bibliografia cadastradas
     * @return
     */
    @RequestMapping(value="/bibliografia", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    List<Bibliografia> consultar(){

        return this.bibliografiaRepository.findAll();
    }

    /**
     * Busca uma bibliografia por paramentro
     * @param id
     * @return
     */
    @RequestMapping(value="/bibliografia/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Bibliografia buscar(@PathVariable("id") Integer id){

        return this.bibliografiaRepository.findById(id);
    }

    /***
     * Exclui uma bibliografia por parametro
     * @param id
     * @return
     */
    @RequestMapping(value="/bibliografia/{id}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response excluir(@PathVariable("id") Integer id){

        Bibliografia bibliografia = bibliografiaRepository.findById(id);

        try {

            bibliografiaRepository.delete(bibliografia);

            return new Response(1, "Registro excluido com sucesso!");

        }catch(Exception e) {
            return new Response(0, e.getMessage());
        }
    }
}
