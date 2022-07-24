import { LogInfo } from '../utils/logger'
import express, { Request, Response } from 'express'
import { UsersController } from '../controller/UsersController'

// Router from express
const usersRouter: express.Router = express.Router()

// http://localhost:8000/api/hello?name=Eliseo
usersRouter
  .route('/')
  // GET :
  .get(async (req: Request, res: Response) => {
    const id: any = req?.query?.id
    LogInfo(`Query: ${id}`)
    const controller: UsersController = new UsersController()
    // Obtain response from controller
    const response: any = await controller.getUsers(id)
    // Send to the client the response
    return res.send(response)
  })
  .delete(async (req: Request, res: Response) => {
    const id: any = req?.query?.id
    LogInfo(`Delete User: ${id}`)
    const controller: UsersController = new UsersController()
    // Obtain response from controller
    const response: any = await controller.deleteUser(id)
    // Send to the client the response
    return res.send(response)
  })
  .post(async (req: Request, res: Response) => {
    const name = req?.body?.name
    const age = req?.body?.age
    const email = req?.body?.email
    const user = {
      name: name || 'Default name',
      age: age || 0,
      email: email || 'Default email'
    }

    LogInfo(`Create User: ${user}`)
    const controller: UsersController = new UsersController()
    // Obtain response from controller
    const response: any = await controller.createUser(user)
    // Send to the client the response
    return res.send(response)
  })
  .put(async (req: Request, res: Response) => {
    const id: any = req?.query?.id
    LogInfo(`Update User: ${id}`)
    const controller: UsersController = new UsersController()
    const user = {
      name: req?.query?.name,
      age: req?.query?.age,
      email: req?.query?.email
    }
    const response: any = await controller.updateUser(id, user)
    return res.send(response)
  })
// Export HelloRouter
export default usersRouter
