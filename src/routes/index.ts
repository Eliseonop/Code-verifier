/**
 * Root Router
 * Redirection to routers
 */

import express, { Request, Response } from 'express'
import helloRouter from './HelloRouter'
import { LogInfo } from '../utils/logger'
import usersRouter from './UserRouter'

// Server instance
const server = express()

// Router instance
const rootRouter = express.Router()

// Activate for request to http://localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('Get: http://localhost:8000/api')
  const date = new Date()
  res.json({
    message: `Hello World! ${date.toLocaleString()}`
  })
})

// Redirection to Router & controllers
server.use('/', rootRouter)
server.use('/hello', helloRouter) // http://localhost:8000/api/hello

// Add more routes to the app
server.use('/users', usersRouter) // http://localhost:8000/api/users
export { server }
