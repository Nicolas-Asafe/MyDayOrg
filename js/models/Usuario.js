class Usuario{
    constructor(Nome,DiaAtual){
        this.Nome = Nome
        this.DiaAtual = DiaAtual
        this.Rotinas = []
    }
    AtualizarUsuario(NovosDadosDoUsuario){
        this.Nome = NovosDadosDoUsuario.Nome
        this.Rotinas = NovosDadosDoUsuario.Rontinas
    }
}
export default Usuario