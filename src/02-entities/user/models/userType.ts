import { userRoleEnum } from "./userRoleEnum"

type UserType = {
  username: string
  name: string
  email: string
  role: userRoleEnum
  image: string
  accessToken?: string | null
  refreshToken?: string | null
}

export type { UserType }
