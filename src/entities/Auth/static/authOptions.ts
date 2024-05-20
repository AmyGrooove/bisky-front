import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { NEXT_AUTH_SECRET } from "@shared/constants"

import { logoutUser, loginUser, refreshTokens } from "../api"

const timeBuffer = 10

const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  secret: NEXT_AUTH_SECRET,
  events: {
    signOut: async () => {
      await logoutUser()
    },
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null

        try {
          return loginUser(credentials)
        } catch (error) {
          console.error(error)

          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user: response }) {
      if (response) return { ...token, ...(response as any) }

      const nowUnix = Math.floor(new Date().getTime() / 1000)

      if (nowUnix + timeBuffer < Number(token.exp)) {
        const data = await refreshTokens()

        return { ...token, ...data }
      }

      return token
    },

    async session({ token, session }) {
      session._id = token._id
      session.username = token.username
      session.email = token.email
      session.avatar = token.avatar
      session.role = token.role
      session.lastOnlineDate = token.lastOnlineDate
      session.user = undefined
      session.accessToken = token.accessToken

      return session
    },
  },
}

export { authOptions }
