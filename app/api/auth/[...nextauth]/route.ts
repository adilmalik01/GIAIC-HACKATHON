import NextAuth, { NextAuthOptions } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/app/models/User';
import connectDB from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

interface CustomUser {
  id: string;
  email: string;
  name: string;
  image?: string;
  createdAt: Date;
  profileBio?: string;
  isAdmin: boolean;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials): Promise<CustomUser | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email ya password missing hai');
        }

        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        console.log(user)

        if (!user) {
          throw new Error('Koi user nahi mila is email se');
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) {
          throw new Error('Galat credentials');
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.profilepic,
          createdAt: user.createdAt,
          profileBio: user.profileBio,
          isAdmin: user.isAdmin
        };
      }
    })
  ],
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: CustomUser;
    }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.createdAt = user.createdAt;
        token.profileBio = user.profileBio;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        session.user.profileBio = token.profileBio;
        session.user.createdAt = token.createdAt;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET || '12345'
};

const handler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };