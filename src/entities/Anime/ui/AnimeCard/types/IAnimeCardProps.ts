import { LinkProps } from "next/link"

import { IAnimeFullModel, IAnimeSimpleModel } from "@entities/Anime"

interface IAnimeCardProps extends Omit<LinkProps, "href"> {
  anime: Partial<IAnimeFullModel | IAnimeSimpleModel>

  onClick?: () => void
  className?: string
}

export type { IAnimeCardProps }
