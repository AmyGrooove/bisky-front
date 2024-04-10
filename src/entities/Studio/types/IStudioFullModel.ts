import { IAnimeSimpleModel } from "@entities/Anime"

import { IStudioModel } from "./IStudioModel"

interface IStudioFullModel extends IStudioModel {
  relatedWorks: IAnimeSimpleModel[]
}

export type { IStudioFullModel }
