"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { refreshTokens } from "@entities/Auth/api"

const updateAvatar = async (file: FormData) => {
  const result = await fetch(API_URL + `/api/user/avatar`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: file,
  })

  if (!result.ok)
    throw new Error(`Failed to update avatar: ${result.statusText}`)

  await refreshTokens()

  return true
}

export { updateAvatar }
