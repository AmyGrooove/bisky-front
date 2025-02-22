import { IUser } from '@entities/user/types'

interface IGetWhoamiResponse
  extends Pick<
    IUser,
    'username' | 'email' | 'avatar' | 'lastOnlineOn' | 'isTemporary' | 'role'
  > {}

export type { IGetWhoamiResponse }
