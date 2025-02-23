import { ReactNode } from 'react'

interface IGenreLayoutProps {
  params: Promise<{ genreID: string }>
  children: ReactNode
}

export type { IGenreLayoutProps }
