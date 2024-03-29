import { IGenreFullModel } from "@entities/Genre"
import { HTMLAttributes } from "react"

interface IGenreBlockSliderProps extends HTMLAttributes<HTMLDivElement> {
  items: IGenreFullModel[]
}

export type { IGenreBlockSliderProps }
