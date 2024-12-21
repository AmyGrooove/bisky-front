import { ReactNode } from "react"

interface IAnimeLayoutProps {
  params: Promise<{ animeId: string }>
  children: ReactNode
}

export type { IAnimeLayoutProps }
