import { unauthorized } from 'next/navigation'
import { useEffect } from 'react'

import { useSession } from '../../useSession'

const useCheckSessionInPage = () => {
  const { isAuthenticated, isLoading } = useSession()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      unauthorized()
    }
  }, [isAuthenticated, isLoading])
}

export { useCheckSessionInPage }
