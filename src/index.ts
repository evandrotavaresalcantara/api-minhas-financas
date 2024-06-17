import express from 'express'
import rotasLancamentoFinanceiros from './routes/lancamentoFinanceiros'
import inicial from './routes/inicial'
const app = express()
const porta = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(inicial)
app.use('/lancamento-financeiros', rotasLancamentoFinanceiros)

app.listen(porta, () => {
    console.log(`Api Inicializada com sucesso | rodando na porta: ${porta} `)
})

