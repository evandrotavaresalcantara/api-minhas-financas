import LancamentoFinanceiro from "./LancamentoFinanceiros";


export default class RepositorioLacamentoFinanceiros {
    listagem: LancamentoFinanceiro[] = [
        new LancamentoFinanceiro('Lancamento1'),
        new LancamentoFinanceiro('Lancamento2'),
        new LancamentoFinanceiro('Lancamento3'),
        new LancamentoFinanceiro('Lancamento4'),
        new LancamentoFinanceiro('Lancamento5'),
    ]

    obterTodos() {
        return this.listagem
    }
}

