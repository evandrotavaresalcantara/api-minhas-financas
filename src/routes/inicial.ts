import { Router } from 'express'


const router = Router()

router.get('/', (req, res) => {
    const meuProcessEnv = process.env
    res.json(meuProcessEnv)
  //  res.send('<h1>Api em Funcionamento</h1>')
})


export default router