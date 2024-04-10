import { IStudioModel } from "./IStudioModel"

interface IStudioSimpleModel extends IStudioModel {
  relatedWorks: string[]
}

export type { IStudioSimpleModel }
