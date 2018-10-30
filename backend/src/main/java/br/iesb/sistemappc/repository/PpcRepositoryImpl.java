package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.Ppc;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PpcRepositoryImpl implements PpcRepository {

    @Autowired
    private PpcRepository ppcRepository;

    @Override
    public Ppc create(Ppc ppc) {
        //return ppcRepository.create(ppc);
        return null;
    }

    @Override
    public Ppc delete(Ppc ppc) {
        if(ppc != null){
            ppcRepository.delete(ppc);
        }
        return ppc;
    }

    @Override
    public List findAll() {
        return ppcRepository.findAll();
    }

    @Override
    public Ppc findById(Integer id) {
        return ppcRepository.findById(id);
    }

    @Override
    public Ppc update(Ppc curso) {
        return null;
    }
}
