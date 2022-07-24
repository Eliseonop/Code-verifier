import mongoose from 'mongoose'

export const UserEntity = () => {
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  })
  return mongoose.models.Users || mongoose.model('Users', userSchema)
}
