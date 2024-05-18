"use server"

import { cookies } from "next/headers"

import { API_URL, IS_DEVELOPMENT } from "@shared/constants"

const refreshTokens = async (): Promise<{
  accessToken: string
  refreshToken: string
}> => {
  const result = await fetch(API_URL + "/api/auth/refresh", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("refresh-token")?.value ?? ""),
    },
  })

  if (!result.ok) throw new Error(`Failed to logout user: ${result.statusText}`)

  const parsedResult = await result.json()

  cookies().set({
    name: "access-token",
    value: parsedResult.accessToken,
    httpOnly: true,
    secure: !IS_DEVELOPMENT,
    maxAge: 300,
    sameSite: "lax",
  })

  cookies().set({
    name: "refresh-token",
    value: parsedResult.refreshToken,
    httpOnly: true,
    secure: !IS_DEVELOPMENT,
    maxAge: 15552000,
    sameSite: "lax",
  })

  return {
    accessToken: parsedResult.accessToken,
    refreshToken: parsedResult.refreshToken,
  }
}

export { refreshTokens }
