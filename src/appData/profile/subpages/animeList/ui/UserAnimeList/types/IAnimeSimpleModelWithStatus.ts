import { IAnimeSimpleModel } from "@entities/Anime"
import { TListStatus } from "@entities/AnimeEstimate"

interface IAnimeSimpleModelWithStatus extends IAnimeSimpleModel {
  userStatus: TListStatus | null
}

export type { IAnimeSimpleModelWithStatus }
