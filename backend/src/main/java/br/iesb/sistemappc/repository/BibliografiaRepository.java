package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.Curso;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface BibliografiaRepository extends Repository<Curso, Integer> {

    Curso create(Curso curso);
    Curso delete(Curso curso);
    List findAll();
    Curso findById(Integer id);
    Curso update(Curso curso);

}
