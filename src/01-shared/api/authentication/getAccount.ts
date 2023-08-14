import { API_URL } from "@/01-shared/data"

interface GetAccountResponse {
  _id: string
  username: string
  password: string
  email: string
  image: string
  role: string
  name: string
  refreshToken: string
}

const getAccount = async (accessToken: string): Promise<GetAccountResponse> => {
  const res = await fetch(`${API_URL}/users/whoami`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!res.ok) {
    throw new Error("[getAccount] Failed to fetch data")
  }

  const data = await res.json()
  return data
}

export { getAccount }
