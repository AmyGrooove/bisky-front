import { ILanguageModel } from "@shared/types/graphql/ILanguageModel"
import { IGenreSimpleModel } from "@entities/Genre"
import { IStudioSimpleModel } from "@entities/Studio"
import { IFranchiseSimpleModel } from "@entities/Franchise"
import { IPlatformModel } from "@entities/Platform"

import { IAnimeSimpleModel } from "./IAnimeSimpleModel"
import { IAnimeModel } from "./IAnimeModel"

interface IAnimeFullModel extends IAnimeModel {
  related?: {
    base?: IAnimeSimpleModel
    shikiId?: number
    relation?: ILanguageModel
  }[]
  genres?: IGenreSimpleModel[]
  studios?: IStudioSimpleModel[]
  franchise?: IFranchiseSimpleModel | null
  otherPlatforms?: { url?: string; platform?: IPlatformModel }[]
}

export type { IAnimeFullModel }
