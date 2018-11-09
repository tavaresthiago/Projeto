package br.iesb.sistemappc.controller;

import br.iesb.sistemappc.model.AtaDeReuniao;
import br.iesb.sistemappc.model.Response;
import br.iesb.sistemappc.repository.AtaDeReuniaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/service"})
public class AtaDeReuniaoController {
    @Autowired
    private AtaDeReuniaoRepository ataDeReuniaoRepository;

    /**
     * Cadastra uma nova ata de reunião
     * @param ataDeReuniao
     * @return
     */
    @RequestMapping(value="/ataDeReuniao", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    Response cadastrar(AtaDeReuniao ataDeReuniao){
        try {
            this.ataDeReuniaoRepository.create(ataDeReuniao);
            return new Response(1, "Registro cadastrado com sucesso!");
        }catch (Exception e) {
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Atualiza os dados de uma ata de reunião
     * @param ataDeReuniao
     * @return
     */
    @RequestMapping(value = "/ataDeReuniao", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response atualizar(AtaDeReuniao ataDeReuniao){
        try {
            this.ataDeReuniaoRepository.update(ataDeReuniao);
            return new Response(1, "Registro atualizado com sucesso!");
        }catch (Exception e){
            return new Response(0,e.getMessage());
        }
    }

    /**
     * Consulta todas as atas de reunião cadastradas
     * @return
     */
    @RequestMapping(value="/ataDeReuniao", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    List<AtaDeReuniao> consultar(){

        return this.ataDeReuniaoRepository.findAll();
    }

    /**
     * Busca uma ata de reunião por paramentro
     * @param id
     * @return
     */
    @RequestMapping(value="/ataDeReuniao/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody AtaDeReuniao buscar(@PathVariable("id") Integer id){

        return this.ataDeReuniaoRepository.findById(id);
    }

    /***
     * Exclui uma ata de reunião por parametro
     * @param id
     * @return
     */
    @RequestMapping(value="/ataDeReuniao/{id}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody Response excluir(@PathVariable("id") Integer id){

        AtaDeReuniao ataDeReuniao = ataDeReuniaoRepository.findById(id);

        try {

            ataDeReuniaoRepository.delete(ataDeReuniao);

            return new Response(1, "Registro excluido com sucesso!");

        }catch(Exception e) {
            return new Response(0, e.getMessage());
        }
    }
}
