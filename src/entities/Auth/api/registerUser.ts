import { signIn } from "next-auth/react"
import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IS_DEVELOPMENT } from "@shared/constants/envVariables"

import { IRegisterUser } from "../types/IRegisterUser"

const registerUser = async (props: IRegisterUser): Promise<true> => {
  const result = await fetch(API_URL + "/api/auth/register", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(props),
    next: { tags: ["reviews"] },
  })

  if (!result.ok)
    throw new Error(`Failed to register user: ${result.statusText}`)

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

  await signIn("credentials", { ...props, redirect: false })

  return true
}

export { registerUser }
