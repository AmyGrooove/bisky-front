import { HTMLAttributes } from "react"

import { IAnimeFullModel } from "@entities/Anime"

interface ISeasonSliderProps extends HTMLAttributes<HTMLDivElement> {
  items: IAnimeFullModel[]
}

export type { ISeasonSliderProps }
