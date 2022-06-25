import { IGoodByeController } from './interfaces/'
import { GoodbyeResponse } from './types'
import { LogSuccess } from '../utils/logger'

export class GoodByeController implements IGoodByeController {
  async getMessage (name?: string): Promise<GoodbyeResponse> {
    LogSuccess('[/api/goodbye] GET request received')
    return {
      message: `Good bay ${name || 'World'}`,
      date: new Date().toLocaleString()
    }
  }
}
