import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const useNavigationFallback = (fallback = '/') => {
  const { back, push } = useRouter()

  const handleNavigation = useCallback(() => {
    if (typeof window !== 'undefined') {
      const currentHost = window.location.host
      const referrer = document.referrer

      if (referrer) {
        try {
          const referrerHost = new URL(referrer).host

          if (referrerHost === currentHost) {
            back()

            return
          }
        } catch (error) {
          console.error('Error referrer url:', error)
        }
      }
    }

    push(fallback)
  }, [fallback, back, push])

  return handleNavigation
}

export { useNavigationFallback }
