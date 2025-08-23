import { IAnimeEpisodePlayerModel } from '@entities/anime/types/IAnimeEpisodePlayerModel'
import { IDubClubModel } from '@entities/club/types/IDubClubModel'

interface IAnimeEpisodePlayerDubClub
  extends Pick<IDubClubModel, '_id' | 'name' | 'slug'> {}

interface IGetAnimeEpisodePlayersResponse
  extends Pick<IAnimeEpisodePlayerModel, 'dubType' | 'links'> {
  dubClub: IAnimeEpisodePlayerDubClub
}

export type { IGetAnimeEpisodePlayersResponse }
