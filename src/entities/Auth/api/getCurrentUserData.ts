import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"
import { IUserPublicModel } from "@entities/User"

const getCurrentUserData = async (): Promise<IUserPublicModel> => {
  const result = await fetch(API_URL + "/api/auth/whoami", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    next: { revalidate: 30 },
  })

  if (!result.ok)
    throw new Error(`Failed to get currentUserData: ${result.statusText}`)

  return result.json()
}

export { getCurrentUserData }
