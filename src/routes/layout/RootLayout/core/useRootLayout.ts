import { dehydrate, QueryClient } from '@tanstack/react-query'
import { IRootLayoutProps } from '../types/IRootLayoutProps'

const useRootLayout = (props: IRootLayoutProps) => {
  const { children } = props

  const queryClient = new QueryClient()
  const dehydratedState = dehydrate(queryClient)

  return { children, dehydratedState }
}

export { useRootLayout }
