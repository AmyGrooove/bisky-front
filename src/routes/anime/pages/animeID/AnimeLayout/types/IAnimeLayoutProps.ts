import { ReactNode } from 'react'

interface IAnimeLayoutProps {
  params: Promise<{ animeID: string }>
  children: ReactNode
}

export type { IAnimeLayoutProps }
