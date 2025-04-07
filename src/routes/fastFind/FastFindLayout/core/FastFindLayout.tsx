'use client'

import { useSession } from '@entities/auth/hooks/useSession'
import { IFastFindLayoutProps } from '../types/IFastFindLayoutProps'
import { useEffect } from 'react'
import { useCallNoAuthorize } from '@widgets/NoAuthorize'

const FastFindLayout = (props: IFastFindLayoutProps) => {
  const { children } = props

  const openNoAuthorize = useCallNoAuthorize()

  const { isError } = useSession()

  useEffect(() => {
    if (isError) openNoAuthorize({ thenPushHref: '/fastFind' })
  }, [isError])

  return <>{children}</>
}

export { FastFindLayout }
