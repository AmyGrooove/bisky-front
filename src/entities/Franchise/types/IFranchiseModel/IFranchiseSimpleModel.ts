import { IFranchiseModel } from "./IFranchiseModel"

interface IFranchiseSimpleModel extends IFranchiseModel {
  relatedWorks: string[]
}

export type { IFranchiseSimpleModel }
