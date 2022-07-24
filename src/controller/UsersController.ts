import { Delete, Get, Post, Put, Query, Route, Tags } from 'tsoa'
import { IUsersController } from './interfaces'
import { LogSuccess, LogWarning } from '../utils/logger'

// ORM- Users Collection
import {
  deleteUserByID,
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserByID
} from '../domain/orm/User.orm'

@Route('/api/users')
@Tags('UsersController')
export class UsersController implements IUsersController {
  /**
   * Endpoint to retrive all users from database
   * @returns  {any} Promise of all users or user by id
   */
  @Get('/')
  public async getUsers (@Query() id?: string): Promise<any> {
    let response: any = ''
    try {
      if (id) {
        LogSuccess(`[/api/users] GET User by id ${id}`)

        response = await getUserById(id)
      } else {
        LogSuccess('[/api/users] GET all Users')
        response = await getAllUsers()
      }
    } catch (error) {
      LogWarning('Error get usrs')
    }

    return response
  }

  /**
   * Endpoint to delete a user from database
   * @param id {string} User id
   * @returns {any} Promise of deleted user
   * */
  @Delete('/')
  public async deleteUser (@Query() id?: string): Promise<any> {
    let response: any = ''
    if (id) {
      LogSuccess(`[/api/users] Delete User by id ${id}`)
      deleteUserByID(id).then(() => {
        response = {
          message: `User ${id} deleted`
        }
      })
    } else {
      LogWarning('[/api/users] Delete Users Request failed')
      response = {
        message: 'Please provide an id'
      }
    }

    return response
  }

  @Post('/')
  public async createUser (user: any): Promise<any> {
    let response: any = ''
    LogSuccess('[/api/users] Create User')
    await createNewUser(user).then(() => {
      response = {
        message: 'User created'
      }
    })
    return response
  }

  @Put('/')
  public async updateUser (id: string, user: any): Promise<any> {
    let response: any = ''
    if (id) {
      LogSuccess(`[/api/users] Update User by id ${id}`)
      await updateUserByID(id, user).then(() => {
        response = {
          message: `User ${id} update`
        }
      })
    } else {
      LogWarning('[/api/users] Delete Users Request failed')
      response = {
        message: 'Please provide an id'
      }
    }

    return response
  }
}
