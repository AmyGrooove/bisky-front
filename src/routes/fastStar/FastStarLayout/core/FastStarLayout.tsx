'use client'

import { useSession } from '@entities/auth/hooks/useSession'
import { useEffect } from 'react'
import { IFastStarLayoutProps } from '../types/IFastStarLayoutProps'
import { useCallNoAuthorize } from '@widgets/NoAuthorize'

const FastStarLayout = (props: IFastStarLayoutProps) => {
  const { children } = props

  const openNoAuthorize = useCallNoAuthorize()

  const { isError } = useSession()

  useEffect(() => {
    if (isError) openNoAuthorize({ thenPushHref: '/fastStar' })
  }, [isError])

  return <>{children}</>
}

export { FastStarLayout }
