import { useRouter } from 'next/navigation'

const useNavigationFallback = (fallback = '/') => {
  const { back, push } = useRouter()

  const goBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) back()
    else push(fallback)
  }

  return goBack
}

export { useNavigationFallback }
