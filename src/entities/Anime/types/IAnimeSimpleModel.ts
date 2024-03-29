import { ILanguageModel } from "@shared/types/graphql/ILanguageModel"

import { IAnimeModel } from "./IAnimeModel"

interface IAnimeSimpleModel extends IAnimeModel {
  related: { base: string; shikiId: number; relation: ILanguageModel }[]
  genres: string[]
  studios: string[]
  franchise: string | null
  otherPlatforms: { url: string; platform: string }[]
}

export type { IAnimeSimpleModel }
