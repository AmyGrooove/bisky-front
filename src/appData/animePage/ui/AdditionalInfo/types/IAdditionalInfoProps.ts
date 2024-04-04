import { HTMLAttributes } from "react"

import { IAnimeFullModel } from "@entities/Anime"

interface IAdditionalInfoProps extends HTMLAttributes<HTMLDivElement> {
  animeData: IAnimeFullModel
}

export type { IAdditionalInfoProps }
