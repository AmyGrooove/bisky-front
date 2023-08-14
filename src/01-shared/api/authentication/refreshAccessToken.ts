import { API_URL } from "@/01-shared/data"

const refreshAccessToken = async (refreshToken: string) => {
  const res = await fetch(`${API_URL}/auth/refresh`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
    method: "GET",
  })

  if (!res.ok) {
    throw new Error("[refreshAccessToken] Failed to fetch data")
  }

  const newTokens = await res.json()

  return {
    accessToken: newTokens.accessToken,
    refreshToken: newTokens.refreshToken,
  }
}

export { refreshAccessToken }
