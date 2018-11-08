package br.iesb.sistemappc.repository;

import br.iesb.sistemappc.model.AtaDeReuniao;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface AtaDeReuniaoRepository extends Repository<AtaDeReuniao, Integer> {

    AtaDeReuniao create(AtaDeReuniao ataDeReuniao);
    AtaDeReuniao delete(AtaDeReuniao ataDeReuniao);
    List findAll();
    AtaDeReuniao findById(Integer id);
    AtaDeReuniao update(AtaDeReuniao ataDeReuniao);

}
