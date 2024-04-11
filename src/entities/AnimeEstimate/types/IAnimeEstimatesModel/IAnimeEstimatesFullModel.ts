import { IAnimeSimpleModel } from "@entities/Anime"

import { IAnimeEstimatesModel } from "./IAnimeEstimatesModel"

interface IAnimeEstimatesFullModel extends IAnimeEstimatesModel {
  base: IAnimeSimpleModel
}

export type { IAnimeEstimatesFullModel }
