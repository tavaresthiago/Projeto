package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.PlanoDeEnsino;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PlanoDeEnsinoRepository extends Repository<PlanoDeEnsino, Integer> {

    PlanoDeEnsino create(PlanoDeEnsino planoDeEnsino);
    PlanoDeEnsino delete(PlanoDeEnsino planoDeEnsino);
    List findAll();
    PlanoDeEnsino findById(Integer id);
    PlanoDeEnsino update(PlanoDeEnsino planoDeEnsino);

}
