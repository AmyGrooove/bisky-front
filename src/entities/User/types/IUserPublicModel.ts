import { ERole } from "../enums/ERole"

interface IUserPublicModel {
  _id: string
  username: string
  email: string
  avatar: string | null
  role: keyof typeof ERole
  lastOnlineDate: Date
}

export type { IUserPublicModel }
