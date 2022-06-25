import { Get, Query, Route, Tags } from 'tsoa'
import { BasicResponse } from './types'
import { IHelloController } from './interfaces'
import { LogSuccess } from '../utils/logger'

@Route('/api/hello')
@Tags('HelloController')
export class HelloController implements IHelloController {
  /**
   * Endpoint to retrive a message "Hello {name}!" in JSON format
   * @param name  Naame of user to be greeted
   * @returns  {BasicResponse} Promise<BasicResponse>
   */
  @Get('/')
  async getMessage (@Query() name?: string): Promise<BasicResponse> {
    LogSuccess('[/api/hello] GET request received')
    return {
      message: `Hello ${name || 'World'}`
    }
  }
}
