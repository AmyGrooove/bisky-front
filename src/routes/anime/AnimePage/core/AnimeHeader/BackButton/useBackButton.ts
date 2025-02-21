import { useNavigationFallback } from '@shared/utils/hooks/useNavigationFallback'

const useBackButton = () => {
  const goBack = useNavigationFallback()

  return { goBack }
}

export { useBackButton }
