'use client'

import { fetchSessionData } from '@entities/auth/hooks/useSession'
import { useEffect } from 'react'

const Auth = () => {
  useEffect(() => {
    fetchSessionData()

    const intervalId = setInterval(fetchSessionData, 4 * 60 * 1000)
    return () => clearInterval(intervalId)
  }, [])

  return null
}

export { Auth }
