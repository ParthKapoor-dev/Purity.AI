import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
    username?: string | null
    role : "CANDIDATE" | "RECRUITER"
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
      username?: string | null
      role : "CANDIDATE" | "RECRUITER"
    }
  } 

  interface Profile {
    role : "CANDIDATE" | "RECRUITER"
  }
}