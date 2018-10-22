package br.iesb.sistemappc.entidades;

public class Response {

    private Integer id;
    private String mensagem;

    public Response() {

    }

    public Response(Integer id, String mensagem) {
        this.id   = id;
        this.mensagem =  mensagem;
    }

    public int getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

}
