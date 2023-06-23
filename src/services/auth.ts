import { API_URL } from "@/constants"

export const getTokens = async (username: string, password: string) => {
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

export const getAccount = async (accessToken: string) => {
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

export const refreshAccessToken = async (refreshToken: string) => {
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

export const registerUser = async (
  username: string,
  password: string,
  email: string,
) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  })

  if (!res.ok) {
    throw new Error("[registerUser] Failed to post data")
  }

  const data = await res.json()
  return data
}
