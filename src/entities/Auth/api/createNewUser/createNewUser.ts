"use server"

import { cookies } from "next/headers"

import { API_URL, IS_DEVELOPMENT } from "@shared/constants"
import { IUserPublicDataWithTokens } from "@entities/Auth"

import { ICreateNewUserProps } from "./ICreateNewUserProps"

const createNewUser = async (
  props: ICreateNewUserProps,
): Promise<IUserPublicDataWithTokens> => {
  const cookieStore = await cookies()

  const result = await fetch(API_URL + "/api/auth/register", {
    method: "PUT",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(props),
  })

  if (!result.ok)
    throw new Error(`Failed to register user: ${result.statusText}`)

  const parsedResult = await result.json()

  cookieStore.set({
    name: "access-token",
    value: parsedResult.accessToken,
    httpOnly: true,
    secure: !IS_DEVELOPMENT,
    maxAge: 600,
    sameSite: "lax",
  })

  cookieStore.set({
    name: "refresh-token",
    value: parsedResult.refreshToken,
    httpOnly: true,
    secure: !IS_DEVELOPMENT,
    maxAge: 15552000,
    sameSite: "lax",
  })

  return parsedResult
}

export { createNewUser }
