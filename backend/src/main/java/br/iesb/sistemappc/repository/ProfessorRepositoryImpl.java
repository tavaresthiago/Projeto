package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.Professor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProfessorRepositoryImpl implements ProfessorRepository {

    @Autowired
    private ProfessorRepository professorRepository;

    @Override
    public Professor create(Professor professor) {
        //return professorRepository.create(professor);
        return null;
    }

    @Override
    public Professor delete(Professor professor) {
        if(professor != null){
            professorRepository.delete(professor);
        }
        return professor;
    }

    @Override
    public List findAll() {
        return professorRepository.findAll();
    }

    @Override
    public Professor findById(Integer id) {
        return professorRepository.findById(id);
    }

    @Override
    public Professor update(Professor professor) {
        return null;
    }
}
