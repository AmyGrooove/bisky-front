import { userApi } from "@/lib"
import { IUser } from "@/types"

export const getUser = async (username: string) => {
  try {
    const res = await userApi.get(`/user${username}`).json()
    console.log(res)
  } catch (error: any) {
    console.log(error.message)
  }
}

export const addNewUser = async (user: IUser) => {
  try {
    const res = await userApi.post(`/user`, { json: user }).json()
    console.log(res)
  } catch (error: any) {
    console.log(error.message)
  }
}

export const updateUser = async (user: IUser) => {
  try {
    const res = await userApi
      .put(`/user${user.username}`, { json: user })
      .json()
    console.log(res)
  } catch (error: any) {
    console.log(error.message)
  }
}

export const deleteUser = async (username: string) => {
  try {
    const res = await userApi.delete(`/user${username}`).json()
    console.log(res)
  } catch (error: any) {
    console.log(error.message)
  }
}
