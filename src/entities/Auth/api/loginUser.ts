import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IS_DEVELOPMENT } from "@shared/constants/envVariables"

import { ILoginUser } from "../types/ILoginUser"

const loginUser = async (props: ILoginUser): Promise<true> => {
  const result = await fetch(API_URL + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(props),
    next: { revalidate: 30 },
  })

  if (!result.ok) throw new Error(`Failed to login user: ${result.statusText}`)

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

export { loginUser }
