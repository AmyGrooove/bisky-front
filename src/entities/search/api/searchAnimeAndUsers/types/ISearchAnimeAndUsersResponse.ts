import { IAnime } from '@entities/anime/types'
import { IUser } from '@entities/user/types'

interface IUserData extends Pick<IUser, 'username' | 'avatar'> {}

interface IAnimeData extends Pick<IAnime, 'poster' | 'status' | '_id'> {
  label: string
  score: number
}

interface ISearchAnimeAndUsersResponse {
  users: IUserData[]
  animes: IAnimeData[]
}

export type { ISearchAnimeAndUsersResponse }
