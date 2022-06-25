import { LogError } from '../../utils/logger'
import { KataEntity } from '../entities/Kata.Entity'

// CRUD
/**
 * Method to obtain a user from Colletction "Kata" in MongoDB
 */
export const GetKataAll = async (): Promise<any[] | undefined> => {
  try {
    const kataModel = KataEntity()

    // Search all users
    return await kataModel.find({ isDelete: false })
  } catch (error) {
    LogError('error')
    throw error
  }
}
