package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.Professor;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ProfessorRepository extends Repository<Professor, Integer> {

    Professor create(Professor professor);
    Professor delete(Professor professor);
    List findAll();
    Professor findById(Integer id);
    Professor update(Professor professor);

}
