import { LinkProps } from "next/link"

import { IGenreFullModel } from "@entities/Genre"

interface IGenreBlock extends Omit<LinkProps, "href"> {
  genre: IGenreFullModel

  className?: string
}

export type { IGenreBlock }
