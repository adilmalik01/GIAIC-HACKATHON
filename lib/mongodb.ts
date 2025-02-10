import mongoose from 'mongoose'
const connectDB = async (): Promise<void> => {
  const mongoUri: string = process.env.NEXT_PUBLIC_MONGODB_URI!

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
