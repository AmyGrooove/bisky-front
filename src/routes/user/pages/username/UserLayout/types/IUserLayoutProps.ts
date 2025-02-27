import { ReactNode } from 'react'

interface IUserLayoutProps {
  params: Promise<{ username: string }>
  children: ReactNode
}

export type { IUserLayoutProps }
