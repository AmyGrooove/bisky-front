'use client'

import { useEffect } from 'react'
import { useUnit } from 'effector-react'

import { $user, $isLoading, fetchSessionData } from '../store/sessionStore'

const useSession = () => {
  const user = useUnit($user)
  const isLoading = useUnit($isLoading)

  useEffect(() => {
    fetchSessionData()
  }, [])

  return { user, isLoading }
}

export { useSession }
