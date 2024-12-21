import { ReactNode } from "react"

interface IFranchiseLayoutProps {
  params: Promise<{ franchiseId: string }>
  children: ReactNode
}

export type { IFranchiseLayoutProps }
