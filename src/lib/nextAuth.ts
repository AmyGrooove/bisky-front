import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import VkProvider from "next-auth/providers/vk"
import jwt_decode from "jwt-decode"
import { NextAuthOptions } from "next-auth"

import { getAccount, getTokens, refreshAccessToken } from "@/services/auth"
import { JWTDecoded } from "@/types"
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  NEXTAUTH_SECRET,
  SHIKIMORI_CLIENT_ID,
  SHIKIMORI_CLIENT_SECRET,
  SHIKIMORI_REDIRECT_URI,
  VK_CLIENT_ID,
  VK_CLIENT_SECRET,
} from "@/constants/auth"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_SECRET,
      // allowDangerousEmailAccountLinking: true,
    }),
    VkProvider({
      clientId: VK_CLIENT_ID,
      clientSecret: VK_CLIENT_SECRET,
      // allowDangerousEmailAccountLinking: true,
    }),
    {
      id: "shikimori",
      name: "Shikimori",
      type: "oauth",
      clientId: SHIKIMORI_CLIENT_ID,
      clientSecret: SHIKIMORI_CLIENT_SECRET,
      authorization: {
        url: "https://shikimori.me/oauth/authorize",
        params: {
          client_id: SHIKIMORI_CLIENT_ID,
          redirect_uri: SHIKIMORI_REDIRECT_URI,
          response_type: "code",
          scope: "",
        },
      },
      token: {
        url: "https://shikimori.me/oauth/token",
        params: {
          grant_type: "authorization_code",
          client_id: SHIKIMORI_CLIENT_ID,
          client_secret: SHIKIMORI_REDIRECT_URI,
          code: "",
          redirect_uri: SHIKIMORI_REDIRECT_URI,
        },
      },
      userinfo: "https://shikimori.me/api/users/whoami",
      profile(profile) {
        return {
          id: "",
          _id: profile._id,
          username: profile.username,
          name: profile.nickname,
          email: profile.email,
          image: profile.avatar,
          role: profile.avatar,
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
          // prettier-ignore
          // eslint-disable-next-line max-len
          const tokens: { accessToken: string; refreshToken: string } = await getTokens(username, password)
          if (!tokens) {
            return null
          }

          const account = await getAccount(tokens.accessToken)
          if (account) {
            return { ...account, ...tokens }
          } else {
            return null
          }
        } catch (error: any) {
          console.log(error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        console.log("[первый вход в систему]")
        if (user.accessToken && user.refreshToken) {
          const { accessToken, refreshToken, ...cleanUser } = user
          const accessTokenDecoded: JWTDecoded = jwt_decode(accessToken)
          const refreshTokenDecoded: JWTDecoded = jwt_decode(refreshToken)
          return {
            user: cleanUser,
            accessToken,
            accessTokenExpires: accessTokenDecoded.exp * 1000,
            refreshToken,
            refreshTokenExpires: refreshTokenDecoded.exp * 1000,
          }
        } else {
          throw new Error("Нет accessToken и refreshToken при входе в систему")
        }
      } else {
        console.log("[очередной доступ к сессии в клиенте]")
        if (token.accessTokenExpires && token.refreshTokenExpires) {
          if (Date.now() >= token.refreshTokenExpires) {
            // если refreshToken истек, то выйти из системы
            console.log("refreshToken истек")
            return {}
          }
          if (Date.now() < token.accessTokenExpires) {
            // если accessToken не истек, то вернуть
            console.log("accessToken не истек")
            return token
          } else {
            // если accessToken истек, то обновить
            console.log("accessToken истек")
            if (token.refreshToken) {
              // prettier-ignore
              // eslint-disable-next-line max-len
              console.log("[accessToken истек] старый accessToken", token.accessToken,)
              const newTokens = await refreshAccessToken(token.refreshToken)
              const { accessToken, refreshToken } = newTokens
              console.log("[accessToken истек] новый accessToken", accessToken)
              const accessTokenDecoded: JWTDecoded = jwt_decode(accessToken)
              return {
                user: token.user,
                accessToken,
                accessTokenExpires: accessTokenDecoded.exp * 1000,
                refreshToken: token.refreshToken,
                refreshTokenExpires: token.refreshTokenExpires,
              }
            } else {
              throw new Error("Нет accessToken при его обновлении")
            }
          }
        } else {
          console.log("Юзера нет в сессии")
          return {}
        }
      }
    },
    async session({ session, token }) {
      const {
        user,
        accessToken,
        accessTokenExpires,
        refreshToken,
        refreshTokenExpires,
      } = token as any

      return { user, accessToken, accessTokenExpires }
    },
  },
  pages: {
    signIn: "/auth",
    // error: "/auth",
  },
}
