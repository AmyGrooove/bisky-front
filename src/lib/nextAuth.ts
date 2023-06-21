import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import VkProvider from "next-auth/providers/vk"

import { IUser } from "@/types"

import { authApi } from "./ky"

import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  // session: {
  //   strategy: "jwt",
  // },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID!,
      clientSecret: process.env.VK_CLIENT_SECRET!,
    }),
    {
      id: "shikimori",
      name: "Shikimori",
      type: "oauth",
      clientId: process.env.SHIKIMORI_CLIENT_ID!,
      clientSecret: process.env.SHIKIMORI_CLIENT_SECRET!,
      authorization: `https://shikimori.me/oauth/authorize?client_id=${process
        .env.SHIKIMORI_CLIENT_ID!}&redirect_uri=${process.env
        .SHIKIMORI_REDIRECT_URI!}&response_type=code&scope=`,
      token: "https://shikimori.me/oauth/token",
      userinfo: "https://shikimori.me/api/users/whoami",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.nickname,
          email: null,
          image: profile.avatar,
        }
      },
    },
    Credentials({
      credentials: {
        username: {
          label: "Username",
          type: "username",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        const username: string = credentials.username
        const password: string = credentials.password

        try {
          const user: IUser = await authApi
            .post(`/login`, { json: { username, password } })
            .json()

          if (user) {
            return user
          } else {
            return null
          }
        } catch (error: any) {
          console.log(error.message)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token as any
      return session
    },
  },
  pages: {
    signIn: "/auth",
  },
}
