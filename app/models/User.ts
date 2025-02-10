import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilepic: {
    type: String,
    default:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s'
  },
  isAdmin: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
  profileBio: { type: String, default: 'Hey there! I am using FoodTuck' }
  // passwordResetToken: { type: String },
  // passwordResetTokenExpiry: { type: Date },
  // emailConfirmToken: { type: String },
  // emailConfirmTokenExpiry: { type: Date }
})

const User  = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
