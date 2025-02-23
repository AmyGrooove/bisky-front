'use client'

import { fetchSessionData } from '@entities/auth/hooks/useSession'
import { useEffect, useRef } from 'react'

const Auth = () => {
  const isFetched = useRef(false)

  useEffect(() => {
    if (isFetched.current) return

    fetchSessionData()
  }, [])

  return null
}

export { Auth }
