import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
// Swagger
import swaggerUi from 'swagger-ui-express'
// Environment variables
// Security
import cors from 'cors'
import helmet from 'helmet'

// TODO: Https

// *Root Router
import { server } from '../routes'

// *Create express app
const app: Express = express()

// * Swagger config and route
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
      explorer: true
    }
  })
)

// *Define SERVER to use "/api" and use root router
app.use('/api', server)
// static server
app.use(express.static('public'))

// TODO MongoDB connection
mongoose.connect('mongodb://localhost:27017/codeverfication')

// *Security config
app.use(cors())
app.use(helmet())

// *Content type config
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))

// *Redirect to root
// http://localhost:8000/ ---> http://localhost:8000/api/
app.get('/', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default app
