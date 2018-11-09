package br.iesb.sistemappc.controller;

import br.iesb.sistemappc.model.Disciplina;
import br.iesb.sistemappc.model.Response;
import br.iesb.sistemappc.repository.DisciplinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/service"})
public class DisciplinaController {
    @Autowired
    private DisciplinaRepository disciplinaRepository;

    /**
     * Cadastra um nova disciplina
     * @param disciplina
     * @return
     */
    @RequestMapping(value="/disciplina", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Response cadastrar(Disciplina disciplina){
        try {
            this.disciplinaRepository.create(disciplina);
            return new Response(1, "Registro cadastrado com sucesso!");
        }catch (Exception e) {
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Atualiza os dados da disciplina
     * @param disciplina
     * @return
     */
    @RequestMapping(value = "/disciplina", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response atualizar(Disciplina disciplina){
        try {
            this.disciplinaRepository.update(disciplina);
            return new Response(1, "Registro atualizado com sucesso!");
        }catch (Exception e){
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Consulta todos as disciplinas cadastrados
     * @return
     */
    @RequestMapping(value="/disciplina", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    List<Disciplina> consultar(){

        return this.disciplinaRepository.findAll();
    }

    /**
     * Busca uma disciplina por paramentro
     * @param id
     * @return
     */
    @RequestMapping(value="/disciplina/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Disciplina buscar(@PathVariable("id") Integer id){

        return this.disciplinaRepository.findById(id);
    }

    /***
     * Exclui uma disciplina por parametro
     * @param id
     * @return
     */
    @RequestMapping(value="/disciplina/{id}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response excluir(@PathVariable("id") Integer id){

        Disciplina disciplina = disciplinaRepository.findById(id);

        try {

            disciplinaRepository.delete(disciplina);

            return new Response(1, "Registro excluido com sucesso!");

        }catch(Exception e) {
            return new Response(0, e.getMessage());
        }
    }
}
