package br.iesb.sistemappc.controller;

import br.iesb.sistemappc.model.Curso;
import br.iesb.sistemappc.model.Ppc;
import br.iesb.sistemappc.model.Response;
import br.iesb.sistemappc.repository.CursoRepository;
import br.iesb.sistemappc.repository.PpcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/service"})
public class PpcController {
    @Autowired
    private PpcRepository ppcRepository;

    /**
     * Cadastra um novo ppc
     * @param ppc
     * @return
     */
    @RequestMapping(value="/ppc", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Response cadastrar(Ppc ppc){
        try {
            this.ppcRepository.create(ppc);
            return new Response(1, "Registro cadastrado com sucesso!");
        }catch (Exception e) {
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Atualiza os dados do ppc
     * @param ppc
     * @return
     */
    @RequestMapping(value = "/ppc", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response atualizar(Ppc ppc){
        try {
            this.ppcRepository.update(ppc);
            return new Response(1, "Registro atualizado com sucesso!");
        }catch (Exception e){
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Consulta todos os ppc's cadastrados
     * @return
     */
    @RequestMapping(value="/ppc", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    List<Ppc> consultar(){

        return this.ppcRepository.findAll();
    }

    /**
     * Busca um ppc por paramentro
     * @param id
     * @return
     */
    @RequestMapping(value="/ppc/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Ppc buscar(@PathVariable("id") Integer id){

        return this.ppcRepository.findById(id);
    }

    /***
     * Exclui um ppc por parametro
     * @param id
     * @return
     */
    @RequestMapping(value="/ppc/{id}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response excluir(@PathVariable("id") Integer id){

        Ppc ppc = ppcRepository.findById(id);

        try {

            ppcRepository.delete(ppc);

            return new Response(1, "Registro excluido com sucesso!");

        }catch(Exception e) {
            return new Response(0, e.getMessage());
        }
    }
}
