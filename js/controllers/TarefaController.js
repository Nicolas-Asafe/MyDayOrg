
import storage from "../storage.js"
import Tarefa from "../models/Tarefa.js"

function CriarTarefa(NomeTarefa, ImportanciaDaTarefa, HorarioDaTarefa, DiaDaTarefa, EmQualRotinaColocarTarefa) {
    const usuario = storage.CarregarUsuario()
    const RotinaDaTarefa = usuario.Rotinas.find(r => r.NomeDaRotina === EmQualRotinaColocarTarefa)
    if (!RotinaDaTarefa) throw new Error("A rotina em que você deseja adicionar a sua nova tarefa não existe")
    if (!RotinaDaTarefa.Dias[DiaDaTarefa]) throw new Error("Este dia que você selecionou não existe")
    if (RotinaDaTarefa.Dias[DiaDaTarefa].Tarefas.length >= 10) throw new Error("Você atingiu o limite de tarefas nesse dia")
    const TarefaExiste = RotinaDaTarefa.Dias[DiaDaTarefa].Tarefas.find(t => t.NomeDaTarefa === NomeTarefa)
    if (TarefaExiste) throw new Error("Essa tarefa já existe")
    const novaTarefa = new Tarefa(NomeTarefa, ImportanciaDaTarefa, HorarioDaTarefa)
    RotinaDaTarefa.Dias[DiaDaTarefa].Tarefas.push(novaTarefa)
    storage.SalvarUsuario(usuario)
}
function ListarTarefaPorNome(NomeDaTarefa, DiaDaTarefa, NomeDaRotinaDaTarefa) {
    const usuario = storage.CarregarUsuario()
    const RotinaDaTarefa = usuario.Rotinas.find(r => r.NomeDaRotina === NomeDaRotinaDaTarefa)
    if (!RotinaDaTarefa) throw new Error("Rotina não existe para listar tarefas dela")
    const TarefaIndex = RotinaDaTarefa.Dias[DiaDaTarefa].Tarefas.findIndex(t => t.NomeDaTarefa === NomeDaTarefa)
    if (TarefaIndex < 0) throw new Error("Tarefa não existe")
    return RotinaDaTarefa.Dias[DiaDaTarefa].Tarefas[TarefaIndex]
}
function RemoverTarefa(NomeDaTarefa, DiaDaTarefa, NomeDaRotinaDaTarefa) {
    const usuario = storage.CarregarUsuario()
    const RotinaDaTarefa = usuario.Rotinas.find(r => r.NomeDaRotina === NomeDaRotinaDaTarefa)
    if (!RotinaDaTarefa) throw new Error("Rotina não existe para deletar alguma tarefa")
    const TarefaIndex = RotinaDaTarefa.Dias[DiaDaTarefa].Tarefas.findIndex(t => t.NomeDaTarefa === NomeDaTarefa)
    if (TarefaIndex < 0) throw new Error("Tarefa não existe para deletar ela")
    RotinaDaTarefa.Dias[DiaDaTarefa].Tarefas.splice(TarefaIndex, 1)
    storage.SalvarUsuario(usuario)
}
function EditarTarefa(NovoNomeDaTarefa, AntigoNomeDaTarefa, DiaDaTarefa, NomeDaRotinaDaTarefa) {
    const usuario = storage.CarregarUsuario()
    const RotinaDaTarefa = usuario.Rotinas.find(r => r.NomeDaRotina === NomeDaRotinaDaTarefa)
    if (!RotinaDaTarefa) throw new Error("Rotina não existe para editar alguma tarefa")
    const TarefaIndex = RotinaDaTarefa.Dias[DiaDaTarefa].Tarefas.findIndex(t => t.NomeDaTarefa === AntigoNomeDaTarefa)
    if (TarefaIndex < 0) throw new Error("Tarefa não existe para editar ela")
    RotinaDaTarefa.Dias[DiaDaTarefa].Tarefas[TarefaIndex].NomeDaTarefa = NovoNomeDaTarefa
    storage.SalvarUsuario(usuario)
}

const TarefaController = {CriarTarefa,ListarTarefaPorNome,RemoverTarefa,EditarTarefa}

export default TarefaController