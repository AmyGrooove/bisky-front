import { IUser } from '@entities/user/types'

type TGetUserSessionsResponse = (IUser['sessions'][number] & {
  isCurrentDevice: boolean
})[]

export type { TGetUserSessionsResponse }
