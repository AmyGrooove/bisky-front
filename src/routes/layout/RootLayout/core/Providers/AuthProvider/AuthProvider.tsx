'use client'

import { IRootLayoutProps } from '../../../types/IRootLayoutProps'

import { useAuthProvider } from './useAuthProvider'

const AuthProvider = (props: IRootLayoutProps) => {
  const { children } = useAuthProvider(props)

  return <>{children}</>
}

export { AuthProvider }
