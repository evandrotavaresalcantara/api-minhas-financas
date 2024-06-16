import Id from "../shared/Id"

export default class LancamentoFinanceiro {
    codigo: string
    nome: string

    constructor(nome: string){
        this.nome = nome
        this.codigo = Id.novo()
    }
}