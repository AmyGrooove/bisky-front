import { TRole } from "@entities/User"

interface IUserPublicModel {
  _id: string
  username: string
  email: string
  avatar: string | null
  role: TRole
  lastOnlineDate: Date
  animeList: {
    generalCount: number
    addedCount: number
    watchingCount: number
    completedCount: number
    droppedCount: number
  }
}

export type { IUserPublicModel }
