import { ILanguageModel } from "@shared/types"

interface IFranchiseModel {
  _id: string
  name: ILanguageModel
  shikiId: string
  description: ILanguageModel
}

export type { IFranchiseModel }
