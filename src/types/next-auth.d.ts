import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: number
      username: string
      name: string
      email: string
      role: string
      accessToken: string
      refreshToken: string
    }
  }
}
