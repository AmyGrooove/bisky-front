import { IUser } from '@entities/user/types'

interface IGetUserSessionsResponse {
  sessions: (Pick<IUser, 'sessions'> & { isCurrentDevice: boolean })[]
}

export type { IGetUserSessionsResponse }
