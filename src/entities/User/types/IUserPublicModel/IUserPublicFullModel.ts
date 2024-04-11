import { IAnimeEstimatesFullModel } from "@entities/AnimeEstimate"

import { IUserPublicModel } from "./IUserPublicModel"

interface IUserPublicFullModel extends IUserPublicModel {
  animeEstimates: IAnimeEstimatesFullModel[]
}

export type { IUserPublicFullModel }
