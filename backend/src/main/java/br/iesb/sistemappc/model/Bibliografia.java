package br.iesb.sistemappc.model;

import javax.persistence.*;

@Table(name = "tb_bibliografia")
@Entity
public class Bibliografia {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_bibliografia")
    private Integer id;

    @Column(name = "ds_bibliografia")
    private String bibliografia;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBibliografia() {
        return bibliografia;
    }

    public void setBibliografia(String curso) {
        this.bibliografia = curso;
    }
}
