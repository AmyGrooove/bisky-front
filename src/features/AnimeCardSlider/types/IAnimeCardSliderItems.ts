import { IAnimeSimpleModel } from "@entities/Anime"
import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"

interface IAnimeCardSliderItems {
  field1: IAnimeFullModel | IAnimeSimpleModel
  field2: IAnimeFullModel | IAnimeSimpleModel | null
}

export type { IAnimeCardSliderItems }
