"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

const logoutUser = async (): Promise<true> => {
  const cookieStore = cookies()

  const result = await fetch(API_URL + "/api/auth/logout", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
  })

  if (!result.ok) throw new Error(`Failed to logout user: ${result.statusText}`)

  cookieStore.delete("access-token")
  cookieStore.delete("refresh-token")

  return true
}

export { logoutUser }
