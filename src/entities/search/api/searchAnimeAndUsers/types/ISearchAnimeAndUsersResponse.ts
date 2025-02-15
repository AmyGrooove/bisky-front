import { IAnime } from '@entities/anime'
import { IUser } from '@entities/user'

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
