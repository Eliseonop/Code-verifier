import { UserEntity } from '../entities/User.entity'

import { LogError } from '../../utils/logger'

// CRUD
/**
 * Method to obtain a user from Colletction "Users" in MongoDB
 */
export const getAllUsers = async (): Promise<any[] | undefined> => {
  try {
    const userModel = UserEntity()

    // Search all users
    return await userModel.find()
  } catch (error) {
    LogError('error')
    console.log({ error })
  }
}

// TODO
// - Get user id
export const getUserById = async (id: string): Promise<any | undefined> => {
  try {
    const userModel = UserEntity()

    // Search user by id
    return await userModel.findById(id)
  } catch (error) {
    LogError('error')
  }
}

// - Delete user
export const deleteUserByID = async (id: string): Promise<any | undefined> => {
  try {
    const userModel = UserEntity()

    return await userModel.deleteOne({ _id: id })
  } catch (error) {
    LogError('[orm error]: Deleting user by id')
  }
}
// - Create user
export const createNewUser = async (user: any): Promise<any | undefined> => {
  try {
    const userModel = UserEntity()

    return await userModel.create(user)
  } catch (error) {
    LogError('[orm error]: Creating user')
  }
}
export const updateUserByID = async (
  id: string,
  user: any
): Promise<any | undefined> => {
  try {
    const userModel = UserEntity()
    return await userModel.findByIdAndUpdate(id, user)
  } catch (error) {
    LogError('[orm error]: Updating user')
  }
  // update user by id
}
