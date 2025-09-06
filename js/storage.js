function CarregarUsuario(){
    const usuario = localStorage.getItem("usuario")
    return JSON.parse(usuario)
}
function SalvarUsuario(NovosDados){
    localStorage.setItem("usuario",JSON.stringify(NovosDados))
}
const Storage = {SalvarUsuario,CarregarUsuario}

export default Storage