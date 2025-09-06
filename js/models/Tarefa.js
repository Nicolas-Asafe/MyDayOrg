class Tarefa{
    constructor(NomeTarefa,ImportanciaDaTarefa,HorarioDaTarefa){
        this.NomeTarefa = NomeTarefa
        this.ImportanciaDaTarefa = ImportanciaDaTarefa
        this.HorarioDaTarefa = HorarioDaTarefa
        this.ID = Math.round(Math.random * 9999)
    }
}