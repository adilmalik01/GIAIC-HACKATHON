import connectDB from '@/lib/mongodb'
import bcrypt from 'bcrypt'
import User from '@/app/models/User'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' })
  }

  const { name, email, password } = await req.json()

  console.log(name, email, password)

  if (!email || !password || !name) {
    return NextResponse.json({ message: 'Incomplete input data' })
  }

  try {
    await connectDB()

    const existingUser = await User.findOne({ email })
    console.log('Existing user:', existingUser)

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      )
      return
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('Hashed Password:', hashedPassword)

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: false,
      profileBio: "Hey There I am Using FoodTuck"

    })

    console.log('New user:', newUser)
    await newUser.save()

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Server error' })
  }
}
