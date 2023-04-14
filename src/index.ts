import { config } from 'dotenv'
import express from 'express'
import * as process from "process";
import {MongoGetUsersRepository} from "./repository/getUsers/mongoGetUsers";
import {GetUsersController} from "./controllers/getUsers/getUsers";

config()
const port = process.env.PORT || 8000

const app = express()

app.listen(port, () => console.log(`app rodando na porta ${port}`))

app.get('/', async (req, res) => {
  const mongoGetUsersRepositoy = new MongoGetUsersRepository()

  const getUsersController = new GetUsersController(mongoGetUsersRepositoy)

  const { body, statusCode } = await getUsersController.handle()

  res.send(body).status(statusCode)
})
