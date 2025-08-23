import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface ISetAnimeUserStatusBody {
  status: IUserAnimeReactionModel['status']
}

export type { ISetAnimeUserStatusBody }
