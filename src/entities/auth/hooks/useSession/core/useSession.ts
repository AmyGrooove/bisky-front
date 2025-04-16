'use client'

import { useUnit } from 'effector-react'
import { isNil } from '@shared/utils/functions'

import { $sessionData } from '../store/sessionData'
import { $sessionError } from '../store/sessionError'

const useSession = () => {
  const user = useUnit($sessionData)
  const isError = useUnit($sessionError)

  return { user, isLoading: isNil(user) && !isError, isError }
}

export { useSession }
