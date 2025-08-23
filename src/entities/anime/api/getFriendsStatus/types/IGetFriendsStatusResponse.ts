import { IUserModel } from '@entities/account/types/IUserModel'
import { IUserAnimeReactionModel } from '@entities/anime/types/IUserAnimeReactionModel'

interface IGetFriendsStatusResponse
  extends Pick<IUserModel, '_id' | 'slug' | 'avatar' | 'nickname'>,
    Pick<IUserAnimeReactionModel, 'score' | 'status'> {}

export type { IGetFriendsStatusResponse }
