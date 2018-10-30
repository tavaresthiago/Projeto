package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.PlanoDeEnsino;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PlanoDeEnsinoRepositoryImpl implements PlanoDeEnsinoRepository {

    @Autowired
    private PlanoDeEnsinoRepository planoDeEnsinoRepository;

    @Override
    public PlanoDeEnsino create(PlanoDeEnsino planoDeEnsino) {
        //return planoDeEnsinoRepository.create(planoDeEnsino);
        return null;
    }

    @Override
    public PlanoDeEnsino delete(PlanoDeEnsino planoDeEnsino) {
        if(planoDeEnsino != null){
            planoDeEnsinoRepository.delete(planoDeEnsino);
        }
        return planoDeEnsino;
    }

    @Override
    public List findAll() {
        return planoDeEnsinoRepository.findAll();
    }

    @Override
    public PlanoDeEnsino findById(Integer id) {
        return planoDeEnsinoRepository.findById(id);
    }

    @Override
    public PlanoDeEnsino update(PlanoDeEnsino planoDeEnsino) {
        return null;
    }
}
