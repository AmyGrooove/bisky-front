import { HTMLAttributes } from "react"

import { IGenreFullModel } from "@entities/Genre"

interface IGenreBlockSliderProps extends HTMLAttributes<HTMLDivElement> {
  items: IGenreFullModel[]

  isCatalogSliderOn?: boolean
}

export type { IGenreBlockSliderProps }
