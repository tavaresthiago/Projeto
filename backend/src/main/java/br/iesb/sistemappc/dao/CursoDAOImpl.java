package br.iesb.sistemappc.dao;

import br.iesb.sistemappc.entidades.Curso;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CursoDAOImpl implements CursoDAO {

    @Autowired
    private CursoDAO cursoDAO;

    @Override
    public Curso create(Curso curso) {
        //return cursoDAO.create(curso);
        return null;
    }

    @Override
    public Curso delete(Curso curso) {
        if(curso != null){
            cursoDAO.delete(curso);
        }
        return curso;
    }

    @Override
    public List findAll() {
        return cursoDAO.findAll();
    }

    @Override
    public Curso findById(Integer id) {
        return cursoDAO.findById(id);
    }

    @Override
    public Curso update(Curso curso) {
        return null;
    }
}
