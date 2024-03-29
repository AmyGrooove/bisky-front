import { ILanguageModel } from "@shared/types/graphql/ILanguageModel"

interface IGenreModel {
  _id: string
  name: ILanguageModel
  description: ILanguageModel
}

export type { IGenreModel }
