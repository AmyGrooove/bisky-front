import { LinkProps } from "next/link"

import { IAnimeFullModel } from "@entities/Anime"

interface ISeasonProps extends Omit<LinkProps, "href"> {
  anime: Partial<IAnimeFullModel>

  isDisabled?: boolean
  className?: string
}

export type { ISeasonProps }
