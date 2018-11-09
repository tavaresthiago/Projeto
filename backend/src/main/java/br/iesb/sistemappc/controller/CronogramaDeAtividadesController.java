package br.iesb.sistemappc.controller;

import br.iesb.sistemappc.model.CronogramaDeAtividades;
import br.iesb.sistemappc.model.Response;
import br.iesb.sistemappc.repository.CronogramaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/service"})
public class CronogramaDeAtividadesController {
    @Autowired
    private CronogramaRepository cronogramaRepository;

    /**
     * Cadastra um novo cronograma de atividades
     * @param cronogramaDeAtividades
     * @return
     */
    @RequestMapping(value="/cronograma", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Response cadastrar(CronogramaDeAtividades cronogramaDeAtividades){
        try {
            this.cronogramaRepository.create(cronogramaDeAtividades);
            return new Response(1, "Registro cadastrado com sucesso!");
        }catch (Exception e) {
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Atualiza os dados do cronograma de atividades
     * @param cronogramaDeAtividades
     * @return
     */
    @RequestMapping(value = "/cronograma", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response atualizar(CronogramaDeAtividades cronogramaDeAtividades){
        try {
            this.cronogramaRepository.update(cronogramaDeAtividades);
            return new Response(1, "Registro atualizado com sucesso!");
        }catch (Exception e){
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Consulta todos os cronograma de atividades cadastrados
     * @return
     */
    @RequestMapping(value="/cronograma", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    List<CronogramaDeAtividades> consultar(){

        return this.cronogramaRepository.findAll();
    }

    /**
     * Busca um cronograma de atividades por paramentro
     * @param id
     * @return
     */
    @RequestMapping(value="/cronograma/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody CronogramaDeAtividades buscar(@PathVariable("id") Integer id){

        return this.cronogramaRepository.findById(id);
    }

    /***
     * Exclui um cronograma de atividades por parametro
     * @param id
     * @return
     */
    @RequestMapping(value="/cronograma/{id}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response excluir(@PathVariable("id") Integer id){

        CronogramaDeAtividades cronogramaDeAtividades = cronogramaRepository.findById(id);

        try {

            cronogramaRepository.delete(cronogramaDeAtividades);

            return new Response(1, "Registro excluido com sucesso!");

        }catch(Exception e) {
            return new Response(0, e.getMessage());
        }
    }
}
