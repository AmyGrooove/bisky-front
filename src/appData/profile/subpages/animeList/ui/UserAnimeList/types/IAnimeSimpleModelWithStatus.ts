import { IAnimeSimpleModel } from "@entities/Anime"
import { EListStatus } from "@entities/AnimeEstimate"

interface IAnimeSimpleModelWithStatus extends IAnimeSimpleModel {
  userStatus: keyof typeof EListStatus | null
}

export type { IAnimeSimpleModelWithStatus }
