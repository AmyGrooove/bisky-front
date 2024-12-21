import { ReactNode } from "react"

interface IProfileLayoutProps {
  params: Promise<{ username: string }>
  children: ReactNode
}

export type { IProfileLayoutProps }
