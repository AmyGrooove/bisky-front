import { IGenreFullModel } from "@entities/Genre"
import { LinkProps } from "next/link"

interface IGenreBlock extends LinkProps {
  genre: IGenreFullModel

  className?: string
}

export type { IGenreBlock }
