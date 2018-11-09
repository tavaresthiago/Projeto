package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.Bibliografia;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface BibliografiaRepository extends Repository<Bibliografia, Integer> {

    Bibliografia create(Bibliografia bibliografia);
    Bibliografia delete(Bibliografia bibliografia);
    List findAll();
    Bibliografia findById(Integer id);
    Bibliografia update(Bibliografia bibliografia);

}
