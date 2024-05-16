import { LinkProps } from "next/link"

import { IAnimeFullModel, IAnimeSimpleModel } from "@entities/Anime"

interface IAnimeCardProps extends Omit<LinkProps, "href"> {
  anime: Partial<IAnimeFullModel | IAnimeSimpleModel>

  className?: string
}

export type { IAnimeCardProps }
