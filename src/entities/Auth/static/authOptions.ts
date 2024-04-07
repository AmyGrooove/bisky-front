import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { NEXT_AUTH_SECRET } from "@shared/constants/envVariables"

import { logoutUser } from "../api/logoutUser"
import { loginUser } from "../api/loginUser"
import { refreshTokens } from "../api/refreshTokens"

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

      if (new Date(Number(token.exp) * 1000) < new Date()) await refreshTokens()

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
