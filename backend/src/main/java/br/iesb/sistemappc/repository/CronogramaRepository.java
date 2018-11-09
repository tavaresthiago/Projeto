package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.CronogramaDeAtividades;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface CronogramaRepository extends Repository<CronogramaDeAtividades, Integer> {

    CronogramaDeAtividades create(CronogramaDeAtividades cronogramaDeAtividades);
    CronogramaDeAtividades delete(CronogramaDeAtividades cronogramaDeAtividades);
    List findAll();
    CronogramaDeAtividades findById(Integer id);
    CronogramaDeAtividades update(CronogramaDeAtividades cronogramaDeAtividades);

}
