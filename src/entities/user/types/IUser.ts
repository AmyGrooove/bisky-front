import { TRoles } from './TRoles'

interface IUser {
  _id: string
  username: string
  passwordHash: string | null
  email: string | null
  avatar: string | null
  friends: string[]
  role: TRoles
  refreshToken: string | null
  lastOnlineOn: Date
  isTemporary: boolean
  createdOn: Date
  socialLinks: {
    google: string | null
    yandex: string | null
  }
  sessions: {
    ip: string
    refreshToken: string
    deviceType: string | null
    location: string | null
    loggedOn: Date
  }[]
}

export type { IUser }
