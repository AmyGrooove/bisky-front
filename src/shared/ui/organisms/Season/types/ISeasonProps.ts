import { LinkProps } from "next/link"

interface ISeasonProps extends LinkProps {
  poster: string | null
  title: string
  genres: string[]
  score: number
  screenshots: string[]

  className?: string
}

export type { ISeasonProps }
