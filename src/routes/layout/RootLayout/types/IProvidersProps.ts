import { DehydratedState } from '@tanstack/react-query'
import { IRootLayoutProps } from './IRootLayoutProps'

interface IProvidersProps extends IRootLayoutProps {
  dehydratedState?: DehydratedState
}

export type { IProvidersProps }
