import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

const useNavigationFallback = (fallback = '/') => {
  const { back, push } = useRouter()

  const hasHistory = useRef(false)

  const goBack = () => {
    if (hasHistory.current) back()
    else push(fallback)
  }

  useEffect(() => {
    if (window.history.length > 1) {
      hasHistory.current = true
    }
  }, [])

  return goBack
}

export { useNavigationFallback }
