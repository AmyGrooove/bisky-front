import { ILanguageModel } from "@shared/types"

interface IPlatformModel {
  _id: string
  name: ILanguageModel
  shikiId: string
  logo: string | null
}

export type { IPlatformModel }
