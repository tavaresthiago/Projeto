package br.iesb.sistemappc.service;

import br.iesb.sistemappc.dao.CursoDAO;
import br.iesb.sistemappc.entidades.Curso;
import br.iesb.sistemappc.entidades.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/service"})
public class CursoService {

    @Autowired
    private CursoDAO cursoDAO;

    /**
     * Cadastra um novo curso
     * @param curso
     * @return
     */
    @RequestMapping(value="/curso", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response cadastrar(Curso curso){
        try {
            this.cursoDAO.create(curso);
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
            this.cursoDAO.update(curso);
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

        return this.cursoDAO.findAll();
    }

    /**
     * Busca um curso por paramentro
     * @param id
     * @return
     */
    @RequestMapping(value="/curso/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Curso buscar(@PathVariable("id") Integer id){

        return this.cursoDAO.findById(id);
    }

    /***
     * Exclui um curso por parametro
     * @param id
     * @return
     */
    @RequestMapping(value="/curso/{id}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response excluir(@PathVariable("id") Integer id){

        Curso curso = cursoDAO.findById(id);

        try {

            cursoDAO.delete(curso);

            return new Response(1, "Registro excluido com sucesso!");

        }catch(Exception e) {
            return new Response(0, e.getMessage());
        }
    }
}
