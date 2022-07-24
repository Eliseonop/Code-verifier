import { BasicResponse } from './../types/index'
import { IKata } from '../../domain/interfaces/IKata.interface'

export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>
}

export interface IUsersController {
  // Real all users from database
  getUsers(id?: string): Promise<any>
  // Delete all users from database
  deleteUser(id?: string): Promise<any>
  // Delete all users from database
  createUser(user: any): Promise<any>
  // Update user
  updateUser(id: string, user: any): Promise<any>
}
export interface IKataController {
  // Read all users from database || get User By ID
  getKatas(page: number, limit: number, id?: string): Promise<any>
  // Create New Kata
  createKata(kata: IKata): Promise<any>
  // Delete Kata By ID
  deleteKata(id?: string): Promise<any>
  // Update Kata
  updateKata(id: string, kata: IKata): Promise<any>
}
