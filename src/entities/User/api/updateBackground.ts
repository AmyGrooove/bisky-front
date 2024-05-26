"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { refreshTokens } from "@entities/Auth/api"

const updateBackground = async (file: FormData) => {
  const result = await fetch(API_URL + `/api/user/background`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: file,
  })

  if (!result.ok)
    throw new Error(`Failed to update background: ${result.statusText}`)

  await refreshTokens()

  return true
}

export { updateBackground }
