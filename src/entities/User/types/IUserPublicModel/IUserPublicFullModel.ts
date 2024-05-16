import { IAnimeEstimatesFullModel } from "@entities/AnimeEstimate"

import { IUserPublicModel } from "./IUserPublicModel"

interface IUserPublicFullModel extends IUserPublicModel {
  animeEstimates: IAnimeEstimatesFullModel[]

  skippedAnime: { animeId: string; updateDate: Date }[]

  subscriptions: string[]

  userPersonalization: { badge: string | null; background: string | null }

  favorites: { animeIds: string[] }
}

export type { IUserPublicFullModel }
