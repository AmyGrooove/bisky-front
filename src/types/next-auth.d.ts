import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    refreshToken?: string
    accessToken?: string
    accessTokenExpires?: number
    error?: string
    user?: User
    expires?: string
  }

  interface User {
    _id: string
    username: string
    email: string
    image: string | null
    role: string
    name: string | null
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
