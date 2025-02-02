import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from '@/lib/mongodb'
import User from '@/app/models/User'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        const { email, password }: any = credentials

        await connectDB()

        const user = await User.findOne({ email })

        if (!user) {
          throw new Error('No user found with this email')
        }

        console.log(user);
        

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) throw new Error('Invalid credentials')

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.profilepic,
          createdAt: user.createdAt,
          profileBio: user.profileBio,
          isAdmin : user.isAdmin
        }
      }
    })
  ],
  callbacks: {
    async jwt ({ token, user }: any) {
      if (user) {
        token.isAdmin = user.isAdmin,
        token.createdAt = user.createdAt,
        token.profileBio = user.profileBio
      }
      return token
    },
    async session ({ session, token }: any) {
      session.user.isAdmin = token.isAdmin
      session.user.profileBio = token.profileBio
      session.user.createdAt = token.createdAt
      return session
    }
  },
  session: {
    strategy: 'jwt' as 'jwt'
  },
  secret: '12345'
}

const handler: any = NextAuth(authOptions)
export { handler as GET, handler as POST }
