import { EListStatus, IAnimeSimpleModel } from "@entities/Anime"

import { IUserPublicModel } from "./IUserPublicModel"

interface IUserPublicFullModel extends IUserPublicModel {
  animeEstimates: {
    base: IAnimeSimpleModel
    score: number
    status: EListStatus
    watchedSeries: number
  }[]
}

export type { IUserPublicFullModel }
