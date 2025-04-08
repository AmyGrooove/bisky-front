'use client'

import { notFound } from 'next/navigation'
import { useSession } from '@entities/auth/hooks/useSession'
import { isNil } from '@shared/utils/functions'

import { IAdminLayoutProps } from '../types/IAdminLayoutProps'

const AdminLayout = (props: IAdminLayoutProps) => {
  const { children } = props

  const { user, isLoading } = useSession()

  if (isLoading) <>loading</>

  if ((isNil(user) || user.role !== 'admin') && !isLoading) notFound()

  return <>{children}</>
}

export { AdminLayout }
