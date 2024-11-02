"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

const updateAvatar = async (file: FormData) => {
  const cookieStore = cookies()

  const result = await fetch(API_URL + `/api/user/avatar`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
    body: file,
  })

  if (!result.ok)
    throw new Error(`Failed to update avatar: ${result.statusText}`)

  cookieStore.delete("access-token")

  return true
}

export { updateAvatar }
