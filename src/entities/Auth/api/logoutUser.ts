import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

const logoutUser = async (): Promise<true> => {
  const result = await fetch(API_URL + "/api/auth/logout", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    next: { revalidate: 30 },
  })

  if (!result.ok) throw new Error(`Failed to logout user: ${result.statusText}`)

  cookies().delete("access-token")
  cookies().delete("refresh-token")

  return true
}

export { logoutUser }
