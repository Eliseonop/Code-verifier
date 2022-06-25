import { BasicResponse } from './../types/index'

export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>
}
