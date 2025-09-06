import Storage from "../storage.js"
import Rotina from "../models/Rotina.js"

const NomeDaRotinaExiste = (NomeDaRotina) => {
    const usuario = Storage.CarregarUsuario()
    return usuario.Rotinas.find(r => r.NomeDaRotina === NomeDaRotina)
}

function CriarRotina(NomeDaRotina) {
    const usuario = Storage.CarregarUsuario()
    const existe = NomeDaRotinaExiste(NomeDaRotina)

    if (!existe) {
        const novaRotina = new Rotina(NomeDaRotina)
        usuario.Rotinas.push(novaRotina)
        Storage.SalvarUsuario(usuario)
        return
    }
    throw new Error("Este nome já está sendo utilizado")
}

function RemoverRotinaPorNome(NomeDaRotina) {
    const usuario = Storage.CarregarUsuario()
    const indexDaRotina = usuario.Rotinas.findIndex(r => r.NomeDaRotina === NomeDaRotina)

    if (indexDaRotina !== -1) {
        usuario.Rotinas.splice(indexDaRotina, 1)
        Storage.SalvarUsuario(usuario)
        return
    }
    throw new Error("Rotina não existe para deletar")
}

function ListarRotinas() {
    const usuario = Storage.CarregarUsuario()
    return usuario.Rotinas
}

function ListarRotinaPorNome(NomeDaRotina) {
    const rotina = NomeDaRotinaExiste(NomeDaRotina)
    if (!rotina) throw new Error("Rotina não encontrada")
    return rotina
}

const RotinaController = { CriarRotina, RemoverRotinaPorNome, ListarRotinaPorNome, ListarRotinas }

export default RotinaController
