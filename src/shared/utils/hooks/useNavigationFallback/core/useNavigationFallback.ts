import { redirect, useRouter } from 'next/navigation'

const useNavigationFallback = (fallback = '/') => {
  const { back } = useRouter()

  const goBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) back()
    else redirect(fallback)
  }

  return goBack
}

export { useNavigationFallback }
