import { HTMLAttributes } from "react"

import { IAnimeFullModel } from "@entities/Anime"

interface IAnimeHeaderProps extends HTMLAttributes<HTMLDivElement> {
  animeData: IAnimeFullModel
}

export type { IAnimeHeaderProps }
