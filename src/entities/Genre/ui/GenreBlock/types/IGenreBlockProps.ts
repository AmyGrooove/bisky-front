import { LinkProps } from "next/link"

import { IGenreFullModel } from "@entities/Genre"

interface IGenreBlock extends LinkProps {
  genre: IGenreFullModel

  className?: string
}

export type { IGenreBlock }
