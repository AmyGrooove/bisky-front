'use client'

import { useSession } from '@entities/auth/hooks/useSession'
import { useEffect } from 'react'
import { useCallNoAuthorize } from '@widgets/NoAuthorize'

import { IFastSelectLayoutProps } from '../types/IFastSelectLayoutProps'

const FastSelectLayout = (props: IFastSelectLayoutProps) => {
  const { children } = props

  const openNoAuthorize = useCallNoAuthorize()

  const { isError } = useSession()

  useEffect(() => {
    if (isError) openNoAuthorize({ thenPushHref: '/fastSelect' })
  }, [isError])

  return <>{children}</>
}

export { FastSelectLayout }
