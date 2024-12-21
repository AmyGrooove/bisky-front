import { ReactNode } from "react"

interface IAnimeListLayoutProps {
  params: Promise<{ username: string }>
  children: ReactNode
}

export type { IAnimeListLayoutProps }
