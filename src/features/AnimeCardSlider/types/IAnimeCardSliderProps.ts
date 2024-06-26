import { HTMLAttributes } from "react"

import { IAnimeFullModel, IAnimeSimpleModel } from "@entities/Anime"

interface IAnimeCardSliderProps extends HTMLAttributes<HTMLDivElement> {
  items: Partial<IAnimeFullModel | IAnimeSimpleModel>[]

  isTwoRows?: boolean
  isCatalogSliderOn?: boolean
}

export type { IAnimeCardSliderProps }
