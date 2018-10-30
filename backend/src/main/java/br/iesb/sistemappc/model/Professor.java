package br.iesb.sistemappc.model;

import javax.persistence.*;

@Table(name = "tb_professor")
@Entity
public class Professor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_professor")
    private Integer id;

    @Column(name = "ds_professor")
    private String professor;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String curso) {
        this.professor = curso;
    }
}
