package br.iesb.sistemappc.dao;

import br.iesb.sistemappc.entidades.Curso;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface CursoDAO extends Repository<Curso, Integer> {

    Curso create(Curso curso);
    Curso delete(Curso curso);
    List findAll();
    Curso findById(Integer id);
    Curso update(Curso curso);

}
