package br.iesb.sistemappc.model;

import javax.persistence.*;

@Table(name = "tb_ata")
@Entity
public class AtaDeReuniao {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_ata")
    private Integer id;

    @Column(name = "ds_ata")
    private String ata;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAta() {
        return ata;
    }

    public void setAta(String curso) {
        this.ata = curso;
    }
}
