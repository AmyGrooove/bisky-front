import { API_URL } from "@/shared/data"

interface GetUserProfileResponse {
  _id: string
  username: string
  image: string | null
  role: string
  name: string | null
}

const getUserProfile = async (
  username: string,
): Promise<GetUserProfileResponse> => {
  const res = await fetch(`${API_URL}/users/profile/${username}`, {
    method: "GET",
  })

  if (!res.ok) {
    throw new Error("[getUserProfile] Failed to fetch data")
  }

  const data = await res.json()
  return data
}

export { getUserProfile }
