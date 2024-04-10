import { IGenreModel } from "./IGenreModel"

interface IGenreSimpleModel extends IGenreModel {
  relatedWorks?: string[]
}

export type { IGenreSimpleModel }
