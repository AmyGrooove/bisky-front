import { LinkProps } from "next/link"

import { IAnimeFullModel } from "@entities/Anime"

interface ISeasonProps extends Omit<LinkProps, "href"> {
  anime: Partial<IAnimeFullModel>

  className?: string
}

export type { ISeasonProps }
