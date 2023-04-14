import { config } from 'dotenv'
import express from 'express'
import * as process from "process";

config()
const port = process.env.PORT || 8000

const app = express()

app.listen(port, () => console.log(`app rodando na porta ${port}`))

app.get('/', (req, res) => {
  res.send('hello woed')
})
