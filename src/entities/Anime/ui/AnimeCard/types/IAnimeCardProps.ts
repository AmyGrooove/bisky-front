import { LinkProps } from "next/link"

import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"
import { IAnimeSimpleModel } from "@entities/Anime"

interface IAnimeCardProps extends Omit<LinkProps, "href"> {
  anime: IAnimeFullModel | IAnimeSimpleModel

  isUserLogged?: boolean
  onClick?: () => void
  className?: string
}

export type { IAnimeCardProps }
