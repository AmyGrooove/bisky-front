import { LinkProps } from "next/link"

import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"

interface ISeasonProps extends LinkProps {
  anime: Partial<IAnimeFullModel>

  className?: string
}

export type { ISeasonProps }
