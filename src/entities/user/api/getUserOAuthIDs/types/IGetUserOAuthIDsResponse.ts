import { IUser } from '@entities/user/types'

interface IGetUserOAuthIDsResponse extends Pick<IUser, 'socialLinks'> {}

export type { IGetUserOAuthIDsResponse }
