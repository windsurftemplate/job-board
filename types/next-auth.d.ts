import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role?: 'employer' | 'jobseeker'
    } & DefaultSession['user']
  }

  interface User {
    id: string
    role?: 'employer' | 'jobseeker'
  }
}
