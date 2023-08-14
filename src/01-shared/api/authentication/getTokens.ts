import { API_URL } from "@/01-shared/data"

interface GetTokensResponse {
  accessToken: string
  refreshToken: string
}

const getTokens = async (
  username: string,
  password: string,
): Promise<GetTokensResponse> => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })

  if (!res.ok) {
    throw new Error("[getTokens] Failed to fetch data")
  }

  const data = await res.json()
  return data
}

export { getTokens }
