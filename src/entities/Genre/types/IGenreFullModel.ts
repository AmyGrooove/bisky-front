import { IAnimeSimpleModel } from "@entities/Anime"
import { IGenreModel } from "./IGenreModel"

interface IGenreFullModel extends IGenreModel {
  relatedWorks: Partial<IAnimeSimpleModel>[]
}

export type { IGenreFullModel }
