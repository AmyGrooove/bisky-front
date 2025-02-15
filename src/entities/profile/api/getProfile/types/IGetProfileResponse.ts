import { IUser } from '@entities/user'

interface IAnimeEstimateData {
  added: number
  watching: number
  completed: number
  dropped: number
  sum: number
}

interface IGetProfileResponse
  extends Pick<IUser, 'username' | 'avatar' | 'role' | 'lastOnlineOn'> {
  friends: Pick<IUser, 'username' | 'avatar'>[]
  animeEstimateData: IAnimeEstimateData
}

export type { IGetProfileResponse }
