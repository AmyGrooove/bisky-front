import { API_URL } from "@/01-shared/data"

const registerUser = async (
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

export { registerUser }
