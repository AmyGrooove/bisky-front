import { DehydratedState } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface IProvidersProps {
  children: ReactNode

  dehydratedState?: DehydratedState
}

export type { IProvidersProps }
