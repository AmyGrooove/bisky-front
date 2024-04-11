import { HTMLAttributes } from "react"

import { IAnimeFullModel } from "@entities/Anime"

interface IAnimeHeaderProps extends HTMLAttributes<HTMLDivElement> {
  animeData: Partial<IAnimeFullModel>
}

export type { IAnimeHeaderProps }
