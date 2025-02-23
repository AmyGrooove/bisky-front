import { ReactNode } from 'react'

interface IStudioLayoutProps {
  params: Promise<{ studioID: string }>
  children: ReactNode
}

export type { IStudioLayoutProps }
