'use client'

import { useSession } from '@entities/auth/hooks/useSession'
import { useEffect } from 'react'
import { useCallNoAuthorize } from '@widgets/NoAuthorize'

import { IFastStarLayoutProps } from '../types/IFastStarLayoutProps'

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
