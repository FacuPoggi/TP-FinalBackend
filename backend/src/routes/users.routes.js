import { Router } from 'express'
import { getUsers } from "../controllers/userController.js";

const routerUsers = Router()

routerUsers.get('/', getUsers)
routerUsers.get('/:pid', getUsers)

export default routerUsers