package br.iesb.sistemappc.model;

import javax.persistence.*;

@Table(name = "tb_plano")
@Entity
public class PlanoDeEnsino {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_plano")
    private Integer id;

    @Column(name = "ds_plano")
    private String plano;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlano() {
        return plano;
    }

    public void setPlano(String curso) {
        this.plano = curso;
    }
}
