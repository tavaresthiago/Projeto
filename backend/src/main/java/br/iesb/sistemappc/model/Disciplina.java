package br.iesb.sistemappc.model;

import javax.persistence.*;

@Table(name = "tb_disciplina")
@Entity
public class Disciplina {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_disciplina")
    private Integer id;

    @Column(name = "ds_disciplina")
    private String disciplina;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String curso) {
        this.disciplina = curso;
    }
}
