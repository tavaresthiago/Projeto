package br.iesb.sistemappc.model;

import javax.persistence.*;

@Table(name = "tb_ppc")
@Entity
public class Ppc {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_ppc")
    private Integer id;

    @Column(name = "ds_ppc")
    private String ppc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPpc() {
        return ppc;
    }

    public void setPpc(String curso) {
        this.ppc = curso;
    }
}
