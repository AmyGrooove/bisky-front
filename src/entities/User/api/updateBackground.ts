"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

const updateBackground = async (file: FormData) => {
  const cookieStore = await cookies()

  const result = await fetch(API_URL + `/api/user/background`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
    body: file,
  })

  if (!result.ok)
    throw new Error(`Failed to update background: ${result.statusText}`)

  cookieStore.delete("access-token")

  return true
}

export { updateBackground }
