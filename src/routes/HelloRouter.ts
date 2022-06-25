import { BasicResponse } from './../controller/types/index'
import { LogInfo } from '../utils/logger'
import express, { Request, Response } from 'express'
import { HelloController } from '../controller/HelloController'

// Router from express
const helloRouter: express.Router = express.Router()

// http://localhost:8000/api/hello?name=Eliseo
helloRouter
  .route('/')
  // GET :
  .get(async (req: Request, res: Response) => {
    // obtain query params
    const name: any = req?.query?.name
    LogInfo(`Query param: ${name}`)
    // Controller instance to execute method
    const controller: HelloController = new HelloController()
    // Obtain response from controller
    const response:BasicResponse = await controller.getMessage(name)
    // Send to the client the response
    return res.send(response)
  })

// Export HelloRouter
export default helloRouter
