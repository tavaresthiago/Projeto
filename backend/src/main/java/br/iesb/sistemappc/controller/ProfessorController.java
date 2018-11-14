package br.iesb.sistemappc.controller;

import br.iesb.sistemappc.model.Curso;
import br.iesb.sistemappc.model.Professor;
import br.iesb.sistemappc.model.Response;
import br.iesb.sistemappc.repository.CursoRepository;
import br.iesb.sistemappc.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/service"})
public class ProfessorController {
    @Autowired
    private ProfessorRepository professorRepository;

    /**
     * Cadastra um novo professor
     * @param professor
     * @return
     */
    @RequestMapping(value="/professor", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Response cadastrar(Professor professor){
        try {
            this.professorRepository.create(professor);
            return new Response(1, "Registro cadastrado com sucesso!");
        }catch (Exception e) {
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Atualiza os dados do professor
     * @param professor
     * @return
     */
    @RequestMapping(value = "/professor", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response atualizar(Professor professor){
        try {
            this.professorRepository.update(professor);
            return new Response(1, "Registro atualizado com sucesso!");
        }catch (Exception e){
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Consulta todos os professores cadastrados
     * @return
     */
    @RequestMapping(value="/professor", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    List<Professor> consultar(){

        return this.professorRepository.findAll();
    }

    /**
     * Busca um professor por paramentro
     * @param id
     * @return
     */
    @RequestMapping(value="/professor/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Professor buscar(@PathVariable("id") Integer id){

        return this.professorRepository.findById(id);
    }

    /***
     * Exclui um professor por parametro
     * @param id
     * @return
     */
    @RequestMapping(value="/professor/{id}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response excluir(@PathVariable("id") Integer id){

        Professor professor = professorRepository.findById(id);

        try {

            professorRepository.delete(professor);

            return new Response(1, "Registro excluido com sucesso!");

        }catch(Exception e) {
            return new Response(0, e.getMessage());
        }
    }

}
