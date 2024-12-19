import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { User } from 'next-auth'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password')
        }

        // TODO: Replace with actual database call
        // This is a mock implementation
        const user = {
          id: '1',
          email: 'test@example.com',
          name: 'Test User',
          password: await bcrypt.hash('password123', 10),
          role: 'jobseeker' as const // Explicitly type as 'employer' | 'jobseeker'
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValid) {
          throw new Error('Invalid credentials')
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        } as User
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role as 'employer' | 'jobseeker'
        session.user.id = token.id as string
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }
