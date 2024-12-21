"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IUserPublicModel } from "@entities/User"

const getWhoamiData = async (): Promise<IUserPublicModel> => {
  const cookieStore = await cookies()

  const result = await fetch(API_URL + "/api/auth/whoami", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookieStore.get("access-token")?.value ?? ""),
    },
  })

  if (!result.ok)
    throw new Error(`Failed to get currentUserData: ${result.statusText}`)

  return result.json()
}

export { getWhoamiData }
