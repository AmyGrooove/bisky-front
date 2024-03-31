import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"

interface IAnimeCardSliderItems {
  field1: IAnimeFullModel
  field2: IAnimeFullModel | null
}

export type { IAnimeCardSliderItems }
