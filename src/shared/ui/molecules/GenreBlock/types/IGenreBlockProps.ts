import { LinkProps } from "next/link"

interface IGenreBlock extends LinkProps {
  background: string[]
  title: string
  description: string
}

export type { IGenreBlock }
