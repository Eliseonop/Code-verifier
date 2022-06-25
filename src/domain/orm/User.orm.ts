import { UserEntity } from '../entities/User.entity'

import { LogError } from '../../utils/logger'

// CRUD
/**
 * Method to obtain a user from Colletction "Users" in MongoDB
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
  try {
    const userModel = UserEntity()

    // Search all users
    return await userModel.find({ isDelete: false })
  } catch (error) {
    LogError('error')
    throw error
  }
}

// TODO
// - Get user id
// - Get user by email
// - Delete user
// - Update user
// - Create user
// update user by id
