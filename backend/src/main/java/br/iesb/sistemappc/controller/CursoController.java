package br.iesb.sistemappc.controller;

import br.iesb.sistemappc.repository.CursoRepository;
import br.iesb.sistemappc.model.Curso;
import br.iesb.sistemappc.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/service"})
public class CursoController {

    @Autowired
    private CursoRepository cursoRepository;

    /**
     * Cadastra um novo curso
     * @param curso
     * @return
     */
    @RequestMapping(value="/curso", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response cadastrar(Curso curso){
        try {
            this.cursoRepository.create(curso);
            return new Response(1, "Registro cadastrado com sucesso!");
        }catch (Exception e) {
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Atualiza os dados do curso
     * @param curso
     * @return
     */
    @RequestMapping(value = "/curso", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response atualizar(Curso curso){
        try {
            this.cursoRepository.update(curso);
            return new Response(1, "Registro atualizado com sucesso!");
        }catch (Exception e){
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Consulta todos os cursos cadastrados
     * @return
     */
    @RequestMapping(value="/curso", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody List<Curso> consultar(){

        return this.cursoRepository.findAll();
    }

    /**
     * Busca um curso por paramentro
     * @param id
     * @return
     */
    @RequestMapping(value="/curso/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Curso buscar(@PathVariable("id") Integer id){

        return this.cursoRepository.findById(id);
    }

    /***
     * Exclui um curso por parametro
     * @param id
     * @return
     */
    @RequestMapping(value="/curso/{id}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response excluir(@PathVariable("id") Integer id){

        Curso curso = cursoRepository.findById(id);

        try {

            cursoRepository.delete(curso);

            return new Response(1, "Registro excluido com sucesso!");

        }catch(Exception e) {
            return new Response(0, e.getMessage());
        }
    }
}
