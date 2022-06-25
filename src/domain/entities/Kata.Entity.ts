import mongoose from 'mongoose'

export const KataEntity = () => {
  const userSchema = new mongoose.Schema({
    name: String,
    description: String,
    Level: Number,
    UserId: String,
    dateCreated: Date,
    valoration: Number,
    chances: Number
  })
  return mongoose.model('User', userSchema)
}
