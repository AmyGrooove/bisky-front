import { LinkProps } from "next/link"

interface IGenreBlock extends LinkProps {
  title: string
  description: string
  posters: (string | null)[]

  className?: string
}

export type { IGenreBlock }
