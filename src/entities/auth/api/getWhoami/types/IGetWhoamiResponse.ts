import { IUser } from '@entities/user'

interface IGetWhoamiResponse
  extends Pick<
    IUser,
    'username' | 'email' | 'avatar' | 'lastOnlineOn' | 'isTemporary'
  > {}

export type { IGetWhoamiResponse }
