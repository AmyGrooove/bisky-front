import { API_URL } from "@/constants"
import { IUser } from "@/types"

export const getUserProfile = async (username: string) => {
  const res = await fetch(`${API_URL}/users/profile/${username}`, {
    method: "GET",
  })

  if (!res.ok) {
    throw new Error("[getUserProfile] Failed to fetch data")
  }

  const data = await res.json()
  return data
}

// export const updateUser = async (user: IUser) => {
//   try {
//     const res = await userApi
//       .put(`/user${user.username}`, { json: user })
//       .json()
//     console.log(res)
//   } catch (error: any) {
//     console.log(error.message)
//   }
// }

// export const deleteUser = async (username: string) => {
//   try {
//     const res = await userApi.delete(`/user${username}`).json()
//     console.log(res)
//   } catch (error: any) {
//     console.log(error.message)
//   }
// }
