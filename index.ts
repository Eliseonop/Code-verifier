import { LogError, LogSuccess } from './src/utils/logger'
import dotenv from 'dotenv'
import server from './src/server'

// *configure dotenv
dotenv.config()

const port = process.env.PORT || 8000

// * Execute server

server.listen(port, () => {
  LogSuccess(`Server running on port http://localhost:${port}/api`)
})

// * Controll server errors
server.on('error', error => {
  LogError(`[Server Error] ${error}`)
})
