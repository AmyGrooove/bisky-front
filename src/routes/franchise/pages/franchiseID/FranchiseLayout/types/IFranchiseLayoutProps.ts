import { ReactNode } from 'react'

interface IFranchiseLayoutProps {
  params: Promise<{ franchiseID: string }>
  children: ReactNode
}

export type { IFranchiseLayoutProps }
