package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.Disciplina;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface DisciplinaRepository extends Repository<Disciplina, Integer> {

    Disciplina create(Disciplina disciplina);
    Disciplina delete(Disciplina disciplina);
    List findAll();
    Disciplina findById(Integer id);
    Disciplina update(Disciplina disciplina);

}
