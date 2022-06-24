import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// Configure dotenv
dotenv.config()

// Create express app
const app: Express = express()
const port: string | number = process.env.PORT || 8000

// Configure express app
app.use(express.json())

// configure routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World amigos!')
})

app.get('/hello', (req: Request, res: Response) => {
  res.send('soy la ruta hello!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
