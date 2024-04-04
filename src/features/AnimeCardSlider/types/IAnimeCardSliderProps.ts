import { HTMLAttributes } from "react"

import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"
import { IAnimeSimpleModel } from "@entities/Anime"

interface IAnimeCardSliderProps extends HTMLAttributes<HTMLDivElement> {
  items: (IAnimeFullModel | IAnimeSimpleModel)[]

  isTwoRows?: boolean
}

export type { IAnimeCardSliderProps }
