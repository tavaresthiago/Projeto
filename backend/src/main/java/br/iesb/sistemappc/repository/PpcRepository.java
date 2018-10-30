package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.Ppc;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PpcRepository extends Repository<Ppc, Integer> {

    Ppc create(Ppc ppc);
    Ppc delete(Ppc ppc);
    List findAll();
    Ppc findById(Integer id);
    Ppc update(Ppc ppc);

}
