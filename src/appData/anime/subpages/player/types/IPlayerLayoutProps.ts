import { ReactNode } from "react"

interface IPlayerLayoutProps {
  params: Promise<{ animeId: string }>
  children: ReactNode
}

export type { IPlayerLayoutProps }
