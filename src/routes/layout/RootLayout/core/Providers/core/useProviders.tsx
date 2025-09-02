import { QueryClient } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'

import { QUERY_OPTIONS } from '../static/QUERY_OPTIONS'
import { IProvidersProps } from '../types/IProvidersProps'

const useProviders = (props: IProvidersProps) => {
  const { children, dehydratedState } = props

  const pathname = usePathname()

  const queryClient = useMemo(() => new QueryClient(QUERY_OPTIONS), [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return { queryClient, children, dehydratedState }
}

export { useProviders }
