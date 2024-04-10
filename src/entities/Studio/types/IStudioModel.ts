import { ILanguageModel } from "@shared/types/graphql/ILanguageModel"

interface IStudioModel {
  _id: string
  name: string
  description: ILanguageModel
  logo: string | null
}

export type { IStudioModel }
