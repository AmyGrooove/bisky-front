import { HTMLAttributes } from "react"

import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"

interface IAnimeCardSliderProps extends HTMLAttributes<HTMLDivElement> {
  items: IAnimeFullModel[]

  isTwoRows?: boolean
}

export type { IAnimeCardSliderProps }
