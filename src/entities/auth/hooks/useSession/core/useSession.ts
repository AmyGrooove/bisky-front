'use client'

import { useUnit } from 'effector-react'

import { $user, $isLoading } from '../store/sessionStore'

const useSession = () => {
  const user = useUnit($user)
  const isLoading = useUnit($isLoading)

  return { user, isLoading }
}

export { useSession }
