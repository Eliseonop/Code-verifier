import express, { Express, Request, Response } from 'express'
// Environment variables

// Security
import cors from 'cors'
import helmet from 'helmet'

// TODO: Https

// *Root Router
import rootRuter from '../routes'

// *Create express app
const server: Express = express()

// *Define SERVER to use "/api" and use root router
server.use('/api', rootRuter)

// TODO: MongoDB connection

// *Security config
server.use(cors())
server.use(helmet())

// *Content type config
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))

// *Redirect to root
// http://localhost:8000/ ---> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default server
