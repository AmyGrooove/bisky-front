import { IAnimeFullModel, IAnimeSimpleModel } from "@entities/Anime"

interface IAnimeCardSliderItems {
  field1: Partial<IAnimeFullModel | IAnimeSimpleModel>
  field2: Partial<IAnimeFullModel | IAnimeSimpleModel> | null
}

export type { IAnimeCardSliderItems }
