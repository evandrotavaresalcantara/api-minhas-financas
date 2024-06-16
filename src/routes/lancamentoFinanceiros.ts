import RepositorioLacamentoFinanceiros from "@src/core/lancamentoFinanceiros/RepositorioLancamentos";
import { Router } from "express";

const router = Router()
const repo = new RepositorioLacamentoFinanceiros()


router.get('/', (req, res) => {
    const dados = repo.obterTodos()
    res.status(200).send(dados)
})

export default router