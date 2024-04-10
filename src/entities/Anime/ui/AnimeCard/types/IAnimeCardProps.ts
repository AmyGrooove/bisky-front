import { LinkProps } from "next/link"

import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"

interface IAnimeCardProps extends LinkProps {
  anime: IAnimeFullModel

  isUserLogged?: boolean
  onClick?: () => void
  className?: string
}

export type { IAnimeCardProps }
