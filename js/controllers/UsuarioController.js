import Storage from "../storage.js"
import Usuario from "../models/Usuario.js"

function CriarUsuario(Nome) {
    const usuarioExistente = Storage.CarregarUsuario()
    if (usuarioExistente) throw new Error("Já existe um usuário salvo")

    const diaAtual = new Date().getDay()
    const novoUsuario = new Usuario(Nome, diaAtual)

    Storage.SalvarUsuario(novoUsuario)
}

function ListarUsuario() {
    return Storage.CarregarUsuario()
}

const UsuarioController = { CriarUsuario, ListarUsuario }

export default UsuarioController
