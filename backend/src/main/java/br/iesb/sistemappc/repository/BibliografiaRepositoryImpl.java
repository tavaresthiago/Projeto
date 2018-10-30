package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.Curso;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BibliografiaRepositoryImpl implements CursoRepository {

    @Autowired
    private CursoRepository cursoRepository;

    @Override
    public Curso create(Curso curso) {
        //return cursoRepository.create(curso);
        return null;
    }

    @Override
    public Curso delete(Curso curso) {
        if(curso != null){
            cursoRepository.delete(curso);
        }
        return curso;
    }

    @Override
    public List findAll() {
        return cursoRepository.findAll();
    }

    @Override
    public Curso findById(Integer id) {
        return cursoRepository.findById(id);
    }

    @Override
    public Curso update(Curso curso) {
        return null;
    }
}
