class Rotina {
    constructor(NomeDaRotina = "") {
        this.NomeDaRotina = NomeDaRotina
        this.Dias = {
            segunda: [],
            terca: [],
            quarta: [],
            quinta: [],
            sexta: [],
            sabado: [],
            domingo: []
        }
        this.ID = Math.round(Math.random * 9000)
    }
}

export default Rotina