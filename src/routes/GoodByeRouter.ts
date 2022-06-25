import { LogInfo } from '../utils/logger'
import { Router, Request, Response } from 'express'
import { GoodByeController } from '../controller/GoodByeController'

export const goodByeRouter: Router = Router()

goodByeRouter.route('/').get(async (req: Request, res: Response) => {
  const name: any = req?.query?.name
  LogInfo(`Query param: ${name}`)
  const controller: GoodByeController = new GoodByeController()
  const response = await controller.getMessage(name)
  return res.send(response)
})
