import { IUser } from '@entities/user/types'

interface IGetWhoamiResponse
  extends Pick<
    IUser,
    'username' | 'email' | 'avatar' | 'lastOnlineOn' | 'isTemporary' | 'role'
  > {
  userSecurityStatus: 'integration' | 'password' | 'full' | 'off'
}

export type { IGetWhoamiResponse }
