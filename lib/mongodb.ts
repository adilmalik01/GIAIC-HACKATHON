import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'
const connectDB = async (): Promise<void> => {
  const mongoUri: string = process.env.NEXT_PUBLIC_MONGODB_URI! // Non-null assertion

  if (mongoose.connections[0].readyState) {
    console.log('MongoDB already connected - Skipping reconnection')
    return
  }
  try {
    await mongoose.connect(mongoUri)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

export default connectDB
