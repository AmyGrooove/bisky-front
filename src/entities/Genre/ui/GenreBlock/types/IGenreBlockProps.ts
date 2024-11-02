import { LinkProps } from "next/link"

import { IGenreFullModel } from "@entities/Genre"

interface IGenreBlockProps extends Omit<LinkProps, "href"> {
  genre: IGenreFullModel

  className?: string
}

export type { IGenreBlockProps }
