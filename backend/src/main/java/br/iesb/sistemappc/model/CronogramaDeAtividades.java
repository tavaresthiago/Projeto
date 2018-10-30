package br.iesb.sistemappc.model;

import javax.persistence.*;

@Table(name = "tb_cronograma")
@Entity
public class CronogramaDeAtividades {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_cronograma")
    private Integer id;

    @Column(name = "ds_cronograma")
    private String cronograma;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCronograma() {
        return cronograma;
    }

    public void setCronograma(String curso) {
        this.cronograma = curso;
    }
}
