import { IAnimeSimpleModel } from "@entities/Anime"

import { IFranchiseModel } from "./IFranchiseModel"

interface IFranchiseFullModel extends IFranchiseModel {
  relatedWorks: IAnimeSimpleModel[]
}

export type { IFranchiseFullModel }
