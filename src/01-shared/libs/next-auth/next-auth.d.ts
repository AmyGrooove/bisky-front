/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
import NextAuth from "next-auth/next"

declare module "next-auth" {
  interface Session {
    // refreshToken?: string
    // accessToken?: string
    // accessTokenExpires?: number
    // error?: string
    user: User
    expires?: string
  }

  interface User {
    id: string
    username: string
    email: string
    image: string | null
    role: string
    accessToken?: string
    refreshToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: User
    refreshToken?: string
    refreshTokenExpires?: number
    accessToken?: string
    accessTokenExpires?: number
  }
}
