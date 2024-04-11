"use server"

import { cookies } from "next/headers"

import { API_URL, IS_DEVELOPMENT } from "@shared/constants"

const refreshTokens = async (): Promise<true> => {
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
    maxAge: 15552000,
    sameSite: "lax",
  })

  cookies().set({
    name: "refresh-token",
    value: parsedResult.refreshToken,
    httpOnly: true,
    secure: !IS_DEVELOPMENT,
    maxAge: 60,
    sameSite: "lax",
  })

  return true
}

export { refreshTokens }
