import ky from "ky-universal"
import { getServerSession } from "next-auth"

import { authOptions } from "./nextAuth"

const API = "http://localhost:3000/api"

export const authApi = ky.create({
  prefixUrl: API,
  headers: {
    "Content-Type": "application/json",
  },
})

export const userApi = authApi.extend({
  credentials: "include",
  headers: {
    // Authorization: `Bearer ${session?.user.accessToken}`
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        const session = await getServerSession(authOptions)
        request.headers.set(
          "Authorization",
          `Bearer ${session?.user.accessToken}`,
        )
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 403) {
          const session = await getServerSession(authOptions)
          const accessToken = session?.user.accessToken
          const refreshToken = session?.user.refreshToken
          const newAccessToken = await ky
            .post(`${API}/auth/refresh`, {
              json: { accessToken, refreshToken },
            })
            .text()
          request.headers.set("Authorization", `Bearer ${newAccessToken}`)
          return ky(request)
        }
      },
    ],
  },
})
