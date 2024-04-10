import { IAnimeSimpleModel } from "@entities/Anime"
import { EListStatus } from "@entities/AnimeEstimate"

import { IUserPublicModel } from "./IUserPublicModel"

interface IAnimeEstimatesModel {
  base: IAnimeSimpleModel
  score: number
  status: EListStatus
  watchedSeries: number
}

interface IUserPublicFullModel extends IUserPublicModel {
  animeEstimates: IAnimeEstimatesModel[]
}

export type { IUserPublicFullModel, IAnimeEstimatesModel }
